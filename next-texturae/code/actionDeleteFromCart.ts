import { cookies } from "next/headers";
import { cartSpecs } from "./types";

const cart = cookies().get("cart")?.value;

export async function deleteProduct(itemId: string) {
  if (cart) {
    const newCart = JSON.parse(cart).filter(
      (item: cartSpecs) => item.id !== itemId
    );

    cookies().set("cart", JSON.stringify(newCart));
  }
}
