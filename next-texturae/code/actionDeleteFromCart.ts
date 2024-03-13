import { cookies } from "next/headers";
import { cartSpecs } from "./types";
import { decryptForSanity, updateSanityUser } from "./actions";
import { revalidatePath } from "next/cache";


export async function deleteProduct(itemId: string) {
  const cart = cookies().get("cart")?.value;
  const userName = cookies().get('user')?.value;
  if (cart) {
    const newCart = JSON.parse(cart).filter(
      (item: cartSpecs) => item.id != itemId
    );
    cookies().set('cart', JSON.stringify(newCart));

      if (cookies().get("session")) {
        await updateSanityUser(await decryptForSanity(cookies().get("session")?.value), JSON.stringify(newCart), userName);
      }
  }
  revalidatePath('/panier');
}
