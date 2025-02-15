import { SignJWT, decodeJwt } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { cartSpecs, product } from "./types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { bd, collUtilisateurs } from "./init";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);


/** 
 * fonction pour encrypter le mot de passe et courriel lors d'une connexion
*/

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

/**
 * fonction permettant de decrypter le mot de passe et courriel d'un utilisateur afin communiquer avec la base donnée
 */

export async function decrypt(input: string | undefined): Promise<any> {
  if (input) {
    const payload: any = decodeJwt(input);

    return payload.pass;
  }
  return;
}
export async function decryptForSanity(
  input: string | undefined
): Promise<any> {
  if (input) {
    const payload = decodeJwt(input);

    return payload.userVal;
  }
  return;
}

/** 
 * fonction permettant de se connecter et accèder a un panier lié à un compte
*/

export async function login(formData: FormData) {
  let cart: any = cookies().get("cart")?.value;
  let userName = null;
  // Verify credentials && get the user
  const user = {
    email: formData.get("email")?.toString(),
    pass: formData.get("password")?.toString(),
  };
  await loginUser(user);
}

/** 
 * fonction permettant de terminer une session de connexion
*/

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  cookies().set("cart", "[]");
  cookies().set("user", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return false;
  return true;
}

/**
 * fonction permettant de mettre à jour le cookie de session afin de ne pas terminer la session en rafraichissement de page
 */

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

/** 
 * fonction permettant de créer un compte pour le site
*/

export async function signIn(formData: FormData) {
  // Verify credentials && get the user
  const cookieStore = cookies();
  const user = {
    email: formData.get("email")?.toString(),
    pass: formData.get("password")?.toString(),
    username: formData.get("username")?.toString(),
  };
  // Create the session
  const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
  const session = await encrypt({ user, expires });
  // Save the session in a cookie
  cookieStore.set("session", session, { expires, httpOnly: true });
  await createSanityUser(user, "[]");
}

/** 
 * fonction permettant d'ajouter les informations d'un nouveau compte dans la base de donnée
*/

async function createSanityUser(
  user: {
    email: string | undefined;
    pass: string | undefined;
    username: string | undefined;
  },
  cart: string | undefined
) {
  await setDoc(doc(bd, collUtilisateurs, `${user.email}`), {
    cart: cart,
    username: user.username,
    email: user.email,
    pass: user.pass,
  });
  if (cart) cookies().set("cart", cart);
  if (user.username) cookies().set("user", user.username);
}

/** 
 * fonction permettant de comparer les informations entrée en paramètre et ceux dans la base de donnée
*/

async function loginUser(user: {
  email: string | undefined;
  pass: string | undefined;
}) {
  const userData: any = await getDoc(
    doc(bd, collUtilisateurs, `${user.email}`)
  );
  if (
    userData.data().email == user.email &&
    userData.data().pass == user.pass
  ) {
    cookies().set("user", userData.data().username);
    const expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
    const userVal = {
      email: userData.data().email,
      pass: userData.data().pass,
    };
    const session = await encrypt({ userVal, expires });
    cookies().set("session", session, { expires: expires });

    if (userData.data().cart && userData.data().cart != "[]") {
      let newCart: any = [];
      let cookieCart = cookies().get("cart")?.value;
      if (cookieCart && cookieCart != "[]") {
        newCart = JSON.parse(cookieCart);
        let idArr: string[] = [];
        newCart.map((item: any, i: number) => {
          idArr[i] = item.id;
        });
        JSON.parse(userData.data().cart).map((item: any) => {
          if (idArr.includes(item.id)) {
            newCart[idArr.indexOf(item.id)].quantity += item.quantity;
          } else {
            newCart.push(item);
          }
        });
        newCart = JSON.stringify(newCart);
      } else {
        newCart = userData.data().cart;
      }
      await setDoc(doc(bd, collUtilisateurs, `${user.email}`), {
        cart: newCart,
        username: userData.data().username,
        pass: user.pass,
        email: user.email,
      });
      cookies().set("cart", newCart);
    } else {
      const theCart = cookies().get("cart")?.value;
      await setDoc(doc(bd, collUtilisateurs, `${user.email}`), {
        cart: theCart,
        username: userData.data().username,
        pass: user.pass,
        email: user.email,
      });
      if (theCart) cookies().set("cart", theCart);
    }
  }
}

/** 
 * fonction permettant de mettre à jour le panier d'un utilisateur dans la base de donnée
*/

export async function updateUser(
  user: { email: string | undefined; pass: string | undefined },
  cart: string | undefined,
  username: string | undefined
) {
  await setDoc(doc(bd, collUtilisateurs, `${user.email}`), {
    cart: cart,
    username: username,
    pass: user.pass,
    email: user.email,
  });
  const userData: any = await getDoc(
    doc(bd, collUtilisateurs, `${user.email}`)
  );
  cookies().set("cart", userData.data().cart);
}

/** 
 * fonction permettant de garder en cookie l'information d'un produit pour l'afficher dans le single page produit
*/

export async function setSingleProductCookie(product: product) {
  cookies().set("produit", JSON.stringify(product));
}

/** 
 * fonction pour ajouter un produit dans le panier
*/

export async function addToCart(searchParams: any, data: product) {
  "use server";
  let arr = [];
  let cart: string | undefined = cookies().get("cart")?.value;
  const userName = cookies().get("user")?.value;

  if (!cookies().get("session")) {
  }

  if (cart && searchParams.color) {
    let bool = true;
    arr = JSON.parse(cart);
    arr.map((item: cartSpecs) => {
      if (item.id == data._id) {
        bool = false;
        item.id = data._id;
        item.quantity += 1;
        item.color = searchParams.color;
        item.size = searchParams.size;
        item.pattern = searchParams.pattern;
        item.material = searchParams.material;
      }
    });
    if (bool) {
      arr.push({
        id: data._id,
        color: searchParams.color,
        size: searchParams.size,
        pattern: searchParams.pattern,
        material: searchParams.material,
        quantity: 1,
      });
    }
    if (cookies().get("session")) {
      await updateUser(
        await decryptForSanity(cookies().get("session")?.value),
        JSON.stringify(arr),
        userName
      );
    } else {
      cookies().set("cart", JSON.stringify(arr));
    }
  } else {
    if (searchParams.color) {
      arr.push({
        id: data._id,
        color: searchParams.color,
        size: searchParams.size,
        pattern: searchParams.pattern,
        material: searchParams.material,
        quantity: 1,
      });
      if (cookies().get("session")) {
        await updateUser(
          await decryptForSanity(cookies().get("session")?.value),
          JSON.stringify(arr),
          userName
        );
      } else {
        cookies().set("cart", JSON.stringify(arr));
      }
    }
  }
}
