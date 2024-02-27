import { quantMinus, quantPlus } from "@/code/actionModifyQuantCart";
import { client } from "@/code/sanityClient";
import { cartSpecs, product } from "@/code/types";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

async function Panier() {
  const cookieCart: string | undefined = cookies().get("cart")?.value;
  let idArr: string[] = [];
  if (cookieCart !== undefined) {
    JSON.parse(cookieCart).map((item:cartSpecs) => {
      idArr.push(item.id);
    });
  }

  const data: any = await client.fetch(`*[_type == "product"] {
    _id,
    name,
    category,
    colors,
    description,
    price,
    gender,
    slug_en,
    slug_fr,
    sizes,
    defaultImg,
    materials,
    patterns,
    image[]{ "imgUrl": asset->url }
  }`);

  return (
    <section className="pt-[120px] flex flex-col gap-20">
      <h2>Votre Panier</h2>
      <div className="relative">
        {data.map((item: product) => {
          if (idArr.includes(item._id)) {
            return (
              <div key={item._id} className="flex gap-3 items-center">
                <img
                  className="w-32 h-auto"
                  src={item.defaultImg}
                  alt={item.name.fr}
                />
                <div className="flex flex-col gap-2">
                  <h2>{item.name.fr}</h2>
                  <span>{item.price}</span>
                  <div className="flex gap-1 items-center">
                    <form action={async () => {
                      'use server';
                      quantPlus(item._id);
                    }}>
                      <button type="submit" className="border rounded-full rounded-thistle p-3">
                        +
                      </button>
                    </form>
                    <span>
                      {cookieCart !== undefined
                        ? JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                            .quantity
                        : ""}
                    </span>
                    <form action={async () => {
                      'use server';
                      quantMinus(item._id)
                    }}>
                      <button type="submit" className="border rounded-full rounded-thistle p-3">
                        -
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-between">
            <span>Sous-total: $30.00</span>
            <Link href={"/"}>Payer</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Panier;
