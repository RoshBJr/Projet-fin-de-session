import { SignJWT, decodeJwt, jwtDecrypt, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { client } from "./sanityClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { product } from "./types";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string | undefined): Promise<any> {
  if (input) {
    const payload: any = decodeJwt(input);

    return payload.user.pass;
  }
  return;
}
export async function decryptForSanity(
  input: string | undefined
): Promise<any> {
  if (input) {
    const payload = decodeJwt(input);

    return payload.user;
  }
  return;
}

export async function login(formData: FormData) {
  revalidatePath("/panier");
  let sanityPass = null;
  let cart: any = null;
  let userName = null;
  // Verify credentials && get the user
  const cookieStore = cookies();
  const user = {
    email: formData.get("email")?.toString(),
    pass: formData.get("password")?.toString(),
    username: formData.get("username")?.toString()
  };
  const userSanity = await client.fetch(`
      *[_type == "users"] {
        pass,
        email,
        cart,
        username
      }
    `);
  if (userSanity) {
    if (user) {
      userSanity.map((singU: any) => {
        if (singU.email == user.email) {
          return (sanityPass = singU.pass), (cart = singU.cart), (userName = singU.username);
        }
      });
    }
  }

  if (sanityPass) {
    sanityPass = await decrypt(sanityPass);
    if (sanityPass == user.pass) {
      if (cart && cart !== "[]") {
        let currCart = cookieStore.get("cart")?.value;
        if (currCart && currCart == "[]") {
          cookieStore.set("cart", cart);
          if(userName) cookieStore.set("user", userName)
          const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
          const session = await encrypt({ user, expires });
          // Save the session in a cookie
          return cookieStore.set("session", session, { expires, httpOnly: true });
        }
        if (currCart) {
          cart = JSON.parse(cart);
          let ids: any = [];
          cart.map((item: any, i: number) => (ids[i] = item.id));
          JSON.parse(currCart).map((currItem: any, i: number) => {
            if (ids.includes(currItem.id)) {
              cart[ids.indexOf(currItem.id)].quantity += currItem.quantity;
            } else {
              cart.push(currItem);
            }
          });
          cart = JSON.stringify(cart);
        }
        cookieStore.set("cart", cart);
        if(userName) cookieStore.set("user", userName)
      }
      // Create the session
      const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
      const session = await encrypt({ user, expires });
      // Save the session in a cookie
      cookies().set("session", session, { expires, httpOnly: true });
      if (cookieStore.get("cart")) {
        const cart = cookieStore.get("cart")?.value;
        createSanityUser(user, cart);
        if(userName) cookieStore.set("user", userName);
      } else {
        createSanityUser(user, "");
        if(userName) cookieStore.set("user", userName)
      }
    }
  }
}

export async function logout() {
  revalidatePath("/login");
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  cookies().set("cart", "[]");
  cookies().set("user", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function signIn(formData: FormData) {
  revalidatePath("/signin");
  // Verify credentials && get the user
  const cookieStore = cookies();
  const user = {
    email: formData.get("email")?.toString(),
    pass: formData.get("password")?.toString(),
    username: formData.get("username")?.toString()
  };
  // Create the session
  const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
  const session = await encrypt({ user, expires });
  // Save the session in a cookie
  cookieStore.set("session", session, { expires, httpOnly: true });
  createSanityUser(user, "[]");
  if(user.username) cookieStore.set("user", user.username)
}

async function createSanityUser(
  user: { email: string | undefined; pass: string | undefined, username:string|undefined },
  cart: string | undefined
) {
  revalidatePath("/");
  const doc: any = {
    _type: "users",
    _id: `${user.email?.split("@")[0]}`,
    email: user.email,
    cart: cart,
    pass: await encrypt({ user }),
    username: user.username
  };

  try {
    console.log(`Item imported successfully`);
    await client.createOrReplace(doc);
  } catch (error: any) {
    console.error(`Error importing item :`, error.message);
  }
}

export async function updateSanityUser(
  user: { email: string | undefined; pass: string | undefined},
  cart: string | undefined,username:string|undefined
) {
  revalidatePath("/");
  const doc: any = {
    _type: "users",
    _id: `${user.email?.split("@")[0]}`,
    email: user.email,
    cart: cart,
    pass: await encrypt({ user }),
    username: username
  };

  try {
    console.log(`Item imported successfully`);
    await client.createOrReplace(doc);
  } catch (error: any) {
    console.error(`Error importing item :`, error.message);
  }
}

export async function setSingleProductCookie(product:product) {
  cookies().set("produit", JSON.stringify(product));
}