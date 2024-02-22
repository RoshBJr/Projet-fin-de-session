import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Femme() {
  const data:any = await client.fetch(`*[gender.fr == "Femme"] {
    _id,
    name,
    category,
    colors,
    description,
    gender,
    slug_en,
    slug_fr,
    defaultImg,
    image[]{ "imgUrl": asset->url }
  }`);

  return (
    <section className="mt-[120px] p-5 grid min-[320px]:grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.map((product: product) => {
        return (
          <Link
            href={{
              pathname: `/produit/${product.slug_en.current}`,
              query: {
                id: product._id,
              },
            }}
          >
            <Image
              className="min-[320px]:w-full md:w-[1/2] min-[500px]:w-[1/2] lg:w-[1/3]  xl:w-[1/4] h-auto"
              src={product.defaultImg}
              alt={product.name.en}
              width={800}
              height={800}
              priority={true}
            />
          </Link>
        );
      })}
    </section>
  );
}
