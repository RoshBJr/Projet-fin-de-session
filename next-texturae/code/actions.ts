import { SignJWT, decodeJwt, jwtDecrypt, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { client } from "./sanityClient";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string|undefined): Promise<any> {
  // const { payload } = await jwtVerify(input, key, {
  //   algorithms: ["HS256"],
  // });
  if(input) {
    const payload = decodeJwt(input);
  
    return payload.user.pass;
  }
  return;
}
export async function decryptForSanity(input: string|undefined): Promise<any> {
  // const { payload } = await jwtVerify(input, key, {
  //   algorithms: ["HS256"],
  // });
  if(input) {
    const payload = decodeJwt(input);
  
    return payload.user;
  }
  return;
}

export async function login(formData: FormData) {
  // Verify credentials && get the user
  const cookieStore = cookies();
  const user = {
    email: formData.get("email")?.toString(),
    pass: formData.get("password")?.toString(),
  };
  const userSanity = await client.fetch(`
      *[_type == "users"] {
        pass,
        email
      }
    `);
  let sanityPass = null;
  if (userSanity) {
    if (user) {
      userSanity.map((singU: any) => {
        if (singU.email == user.email) {
          return (sanityPass = singU.pass);
        }
      });
    }
  }
  if (sanityPass) {
    sanityPass = await decrypt(sanityPass);
    if (sanityPass == user.pass) {
      // Create the session
      const expires = new Date(Date.now() + (60*60*24)*1000);
      const session = await encrypt({ user, expires });
      // Save the session in a cookie
      cookies().set("session", session, { expires, httpOnly: true });
      if (cookieStore.get("cart")) {
        const cart = cookieStore.get("cart")?.value;
        return createSanityUser(user, cart);
      }
      return createSanityUser(user, "");
    }
  }
  // console.log(sanityPass)

  // console.log(await decrypt(val[0].pass) == user.pass);
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
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

async function createSanityUser(
  user: { email: string | undefined; pass: string | undefined },
  cart: string | undefined
) {
  const doc: any = {
    _type: "users",
    _id: '1',
    email: user.email,
    cart: cart,
    pass: await encrypt({ user }),
  };

  try {
    console.log(`Item imported successfully`);
    await client.createOrReplace(doc);
  } catch (error: any) {
    console.error(`Error importing item :`, error.message);
  }
}

export async function updateSanityUser(user: { email: string | undefined; pass: string | undefined },cart: string | undefined, ) {
  const doc: any = {
    _type: "users",
    _id: '1',
    email: user.email,
    cart: cart,
    pass: await encrypt({user})
  };

  try {
    console.log(`Item imported successfully`);
    await client.createOrReplace(doc);
  } catch (error: any) {
    console.error(`Error importing item :`, error.message);
  }
}
