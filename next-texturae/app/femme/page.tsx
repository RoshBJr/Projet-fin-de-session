import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "../components/server/ProductCard";
import FilterDropdown from "../components/icons/FilterDropdown";
import DropDown from "../components/server/DropDown";

export default async function Femme({searchParams}:{searchParams:{filtre:string, tri:string}}) {
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
    <section className="pt-[200px] bg-alice-blue flex flex-col">
      <div className="flex justify-between">
        <FilterDropdown tri={searchParams.tri}/>
        <DropDown filtre={searchParams.filtre}/>
      </div>
      <div className="p-5 grid min-[320px]:grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data.map((product: product) => {
          const arrFilter = [searchParams.filtre, searchParams.tri];
          if(searchParams.filtre == undefined) {
            return <ProductCard key={product._id} product={product} />;
          } else if(arrFilter.includes(product.category.fr)) {
            return <ProductCard key={product._id} product={product} />
          }
        })}
      </div>
    </section>
  );
}
