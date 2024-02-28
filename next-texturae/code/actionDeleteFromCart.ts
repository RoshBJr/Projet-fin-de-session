import { cookies } from "next/headers";
import { cartSpecs } from "./types";


export async function deleteProduct(itemId: string) {
  const cart = cookies().get("cart")?.value;
  if (cart) {
    const newCart = JSON.parse(cart).filter(
      (item: cartSpecs) => item.id !== itemId
    );

    cookies().set('cart', JSON.stringify(newCart));

  }
}
