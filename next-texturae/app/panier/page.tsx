import { deleteProduct } from "@/code/actionDeleteFromCart";
import { quantMinus, quantPlus } from "@/code/actionModifyQuantCart";
import { client } from "@/code/sanityClient";
import { cartSpecs, product } from "@/code/types";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

async function Panier() {
  const cookieCart: string | undefined = cookies().get("cart")?.value;
  const en = cookies().get("lang")?.value ? "en" : "fr";
  let idArr: string[] = [];
  let price: number = 0;

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

  if (cookieCart !== undefined) {
    JSON.parse(cookieCart).map((item: cartSpecs) => {
      idArr.push(item.id);
    });

    data.map((item: product) => {
      if (idArr.includes(item._id)) {
        const quant = JSON.parse(cookieCart)[idArr.indexOf(item._id)].quantity;
        price += item.price * quant;
      }
    });
  }

  return (
    <section className="pt-[120px] flex flex-col gap-20">
      <h2>Votre Panier</h2>
      <div className="relative">
        {data.map((item: product) => {
          if (idArr.includes(item._id)) {
            return (
              <div key={item._id} className="flex gap-3 items-center relative">
                <form
                  action={async () => {
                    "use server";
                    deleteProduct(item._id);
                  }}
                >
                  <button
                    type="submit"
                    className="absolute top-0 right-0 pr-5 pt-5"
                  >
                    X
                  </button>
                </form>
                <img
                  className="w-32 h-auto"
                  src={item.defaultImg}
                  alt={item.name[en]}
                />
                <div className="flex flex-col gap-2">
                  <h2>{item.name[en]}</h2>
                  <span>${item.price}</span>
                  <div>
                    <span>{en == "en" ? "Color" : "Couleur"}:</span>
                    <span>
                      {cookieCart &&
                        item.colors[en][
                          item.colors.fr.indexOf(
                            JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                              .color
                          )
                        ]}
                    </span>
                    <span>
                      {cookieCart &&
                      JSON.parse(cookieCart)[idArr.indexOf(item._id)].size !==
                        "undefined" ? (
                        <div>
                          <span>{en == "en" ? "Size" : "Taille"}:</span>
                          <span>
                            {
                              JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                                .size
                            }
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </span>
                    {cookieCart &&
                    JSON.parse(cookieCart)[idArr.indexOf(item._id)].pattern !==
                      "undefined" ? (
                      <div>
                        <span>{en == "en" ? "Pattern" : "Modèle"}:</span>
                        <span>
                          {
                            item.patterns[en][
                              item.patterns.fr.indexOf(
                                JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                                  .pattern
                              )
                            ]
                          }
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    {cookieCart &&
                    JSON.parse(cookieCart)[idArr.indexOf(item._id)].material !==
                      "undefined" ? (
                      <div>
                        <span>{en == "en" ? "Material" : "Matériel"}:</span>
                        <span>
                          {
                            item.materials[en][
                              item.materials.fr.indexOf(
                                JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                                  .material
                              )
                            ]
                          }
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex gap-1 items-center">
                    <form
                      action={async () => {
                        "use server";
                        quantPlus(item._id);
                      }}
                    >
                      <button
                        type="submit"
                        className="border rounded-full rounded-thistle p-3"
                      >
                        +
                      </button>
                    </form>
                    <span>
                      {cookieCart !== undefined
                        ? JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                            .quantity
                        : ""}
                    </span>
                    <form
                      action={async () => {
                        "use server";
                        quantMinus(item._id);
                      }}
                    >
                      <button
                        type="submit"
                        className="border rounded-full rounded-thistle p-3"
                      >
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
            <span>Sous-total: ${price.toFixed(2)}</span>
            <Link href={"/"}>Payer</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Panier;
