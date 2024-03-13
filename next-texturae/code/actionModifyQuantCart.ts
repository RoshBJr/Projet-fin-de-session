import { cookies } from "next/headers";
import { cartSpecs } from "./types";
import { decrypt, decryptForSanity, updateSanityUser } from "./actions";
import { revalidatePath } from "next/cache";

export async function quantMinus(id: string) {
  const cart = cookies().get("cart")?.value;
  const userName = cookies().get('user')?.value;
  if (cart) {
    let newCart = JSON.parse(cart);
    newCart.map((item: cartSpecs) => {
      if (item.id == id) {
        item.quantity -= item.quantity == 1 ? 0 : 1;
      }
    });
    cookies().set("cart", JSON.stringify(newCart));
    if (cookies().get("session")) {
      if (cookies().get("session")) {
        await updateSanityUser(await decryptForSanity(cookies().get("session")?.value), JSON.stringify(newCart), userName);
      }
    }
  }
  revalidatePath('/');
}
export async function quantPlus(id: string) {
  const userName = cookies().get('user')?.value;
  const cart = cookies().get("cart")?.value;
  if (cart) {
    let newCart = JSON.parse(cart);
    newCart.map((item: cartSpecs) => {
      if (item.id == id) {
        item.quantity += 1;
      }
    });
    cookies().set("cart", JSON.stringify(newCart));
    if (cookies().get("session")) {
      await updateSanityUser(await decryptForSanity(cookies().get("session")?.value), JSON.stringify(newCart), userName);
    }
  }
  revalidatePath('/');
}
