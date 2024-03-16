import { cookies } from "next/headers";
import { cartSpecs } from "./types";
import { decryptForSanity, updateUser } from "./actions";

export async function deleteProduct(itemId: string) {
  const cart = cookies().get("cart")?.value;
  const userName = cookies().get('user')?.value;
  if (cart) {
    const newCart = JSON.parse(cart).filter(
      (item: cartSpecs) => item.id != itemId
    );

      if (cookies().get("session")) {
        await updateUser(await decryptForSanity(cookies().get("session")?.value), JSON.stringify(newCart), userName);
      }
  }
}
