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
    <section className="pt-[120px] flex flex-col gap-20 font-font-titre bg-alice-blue">
      <h2 className="mx-20 text-5xl text-davys-gray">{en == "en" ? "Your Cart" : "Votre Panier"}</h2>
      <div className="relative mx-20 border-2 border-thistle rounded-[8px] max-h-[70vh] overflow-y-scroll">
        <div className="flex flex-col gap-7 py-10 px-24">
          {data.map((item: product) => {
            if (idArr.includes(item._id)) {
              return (
                <div
                  key={item._id}
                  className="pl-5 flex gap-5 items-start py-5 relative border-2 border-thistle rounded-[8px] justify-start"
                >
                  <form
                    className="absolute top-0 right-0 pr-5 pt-5"
                    action={async () => {
                      "use server";
                      await deleteProduct(item._id);
                    }}
                  >
                    <button
                      type="submit"
                      className="py-2 px-5 border-2 border-thistle rounded-[8px] hover:bg-davys-gray hover:text-alice-blue hover:border-davys-gray duration-200"
                    >
                      X
                    </button>
                  </form>
                  <img
                    className="w-80 h-auto rounded-[8px] border border-thistle"
                    src={item.defaultImg}
                    alt={item.name[en]}
                  />
                  <div className="flex flex-col gap-2 text-3xl text-davys-gray">
                    <h2 className="">{item.name[en]}</h2>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2 items-center">
                        <span>{en == "en" ? "Color" : "Couleur"}:</span>
                        <span className="border-2 rounded-[8px] border-davys-gray px-3 py-1 text-alice-blue bg-thistle text-xl">
                          {cookieCart &&
                            item.colors[en][
                              item.colors.fr.indexOf(
                                JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                                  .color
                              )
                            ]}
                        </span>
                      </div>
                      <span>
                        {cookieCart &&
                        JSON.parse(cookieCart)[idArr.indexOf(item._id)].size !==
                          "undefined" ? (
                          <div className="flex gap-2 items-center">
                            <span>{en == "en" ? "Size" : "Taille"}:</span>
                            <span className="border-2 rounded-[8px] border-davys-gray px-3 py-1 text-alice-blue bg-thistle text-xl">
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
                      JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                        .pattern !== "undefined" ? (
                        <div className="flex gap-2 items-center">
                          <span>{en == "en" ? "Pattern" : "Modèle"}:</span>
                          <span className="border-2 rounded-[8px] border-davys-gray px-3 py-1 text-alice-blue bg-thistle text-xl">
                            {
                              item.patterns[en][
                                item.patterns.fr.indexOf(
                                  JSON.parse(cookieCart)[
                                    idArr.indexOf(item._id)
                                  ].pattern
                                )
                              ]
                            }
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      {cookieCart &&
                      JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                        .material !== "undefined" ? (
                        <div className="flex gap-2 items-center">
                          <span>{en == "en" ? "Material" : "Matériel"}:</span>
                          <span className="border-2 rounded-[8px] border-davys-gray px-3 py-1 text-alice-blue bg-thistle text-xl">
                            {
                              item.materials[en][
                                item.materials.fr.indexOf(
                                  JSON.parse(cookieCart)[
                                    idArr.indexOf(item._id)
                                  ].material
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
                        className="flex justify-center items-center"
                        action={async () => {
                          "use server";
                          quantMinus(item._id);
                        }}
                      >
                        <button
                          type="submit"
                          className="border rounded-[8px] border-davys-gray bg-thistle text-alice-blue px-4 py-[2px] hover:bg-davys-gray duration-200"
                        >
                          -
                        </button>
                      </form>
                      <span className="border rounded-[8px] border-thistle bg-alice-blue text-davys-gray px-4 py-1">
                        {cookieCart !== undefined
                          ? JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                              .quantity
                          : ""}
                      </span>
                      <form
                        className="flex justify-center items-center"
                        action={async () => {
                          "use server";
                          quantPlus(item._id);
                        }}
                      >
                        <button
                          type="submit"
                          className="border rounded-[8px] border-davys-gray bg-thistle text-alice-blue px-4 py-[2px] hover:bg-davys-gray duration-200"
                        >
                          +
                        </button>
                      </form>
                    </div>
                    <span>${item.price}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="border-2 border-b-0 border-thistle rounded-t-[8px] sticky bottom-0 left-0 right-0 w-full h-28 bg-alice-blue flex justify-between items-center px-5">
          <span className="font-font-titre text-davys-gray text-3xl">
            {en == "en" ? "Subtotal" : "Sous-total"}: ${price.toFixed(2)}
          </span>
          <Link
            className="border border-davys-gray rounded-[8px] px-5 py-2 bg-thistle text-alice-blue font-font-titre text-3xl hover:bg-davys-gray duration-200"
            href={"/"}
          >
            {en == 'en' ? "Pay": "Payer"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Panier;
