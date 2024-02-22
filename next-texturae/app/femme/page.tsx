import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "../components/server/ProductCard";

export default async function Femme() {
  const data:any = await client.fetch(`*[gender.fr == "Femme"] {
    _id,
    name,
    category,
    colors,
    description,
    gender,
    price,
    slug_en,
    slug_fr,
    defaultImg,
    image[]{ "imgUrl": asset->url }
  }`);

  return (
    <section className="bg-alice-blue mt-[120px] p-5 grid min-[320px]:grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.map((product: product) => {
          return <ProductCard product={product} />
      })}
    </section>
  );
}
