import { cookies } from "next/headers";
import { cartSpecs } from "./types";

export async function quantMinus(id:string) {
  const cart = cookies().get("cart")?.value;
  if(cart) {
    let newCart = JSON.parse(cart);
    newCart.map((item:cartSpecs) => {
      if(item.id == id) {
        item.quantity-= item.quantity == 0 ? 0 : 1;
      }
    })
    cookies().set("cart", JSON.stringify(newCart));
  }
}
export async function quantPlus(id:string) {
  const cart = cookies().get("cart")?.value;
  if(cart) {
    let newCart = JSON.parse(cart);
    newCart.map((item:cartSpecs) => {
      if(item.id == id) {
        item.quantity+= 1;
      }
    })
    cookies().set("cart", JSON.stringify(newCart));
  }
}