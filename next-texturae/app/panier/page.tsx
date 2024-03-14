import { panierQ } from "@/code/SanityQueries";
import { client } from "@/code/sanityClient";
import { cartSpecs, product } from "@/code/types";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import SingleProduitPanier from "../components/server/SingleProduitPanier";

async function Panier() {
  const cookieCart: string | undefined = cookies().get("cart")?.value;
  const lang = cookies().get("lang")?.value ? "en" : "fr";
  let idArr: string[] = [];
  let price: number = 0;

  const data: any = await client.fetch(panierQ(), undefined, {
    cache: "force-cache",
  });

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
    <section className="pt-[120px] flex flex-col min-[320px]:gap-7 xl:gap-20 font-font-titre bg-primary flex-grow pb-28">
      <h2 className="min-[320px]:mx-3 xl:mx-20 min-[320px]:text-3xl xl:text-5xl text-neutral">
        {lang == "en" ? "Your Cart" : "Votre Panier"}
      </h2>
      <div className="min-[320px]:mx-3 md:mx-10 relative 2xl:mx-20 2xl:border-2 border-thistle rounded-[8px] 2xl:max-h-[75vh] xl:overflow-y-scroll">
        <div className="flex flex-col gap-7 py-10 2xl:px-24">
          {data.map((item: product) => {
            if (idArr.includes(item._id)) {
              return (
                <SingleProduitPanier
                  key={item._id}
                  item={item}
                  lang={lang}
                  cookieCart={cookieCart}
                  idArr={idArr}
                />
              );
            }
          })}
        </div>
        <div className="xl:border-2 border-b-0 border-thistle rounded-t-[8px] xl:sticky bottom-0 left-0 right-0 w-full h-28 bg-primary flex justify-between min-[320px]:flex-col xl:flex-row xl:items-center xl:px-5">
          <span className="font-font-titre text-neutral text-3xl">
            {lang == "en" ? "Subtotal" : "Sous-total"}: ${price.toFixed(2)}
          </span>
          <Link
            className="text-center border border-davys-gray rounded-[8px] px-5 py-2 bg-thistle text-neutral hover:text-base-100 font-font-titre text-3xl hover:bg-neutral duration-200"
            href={"/"}
          >
            {lang == "en" ? "Pay" : "Payer"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Panier;
