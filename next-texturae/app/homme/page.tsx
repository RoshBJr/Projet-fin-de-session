import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/server/ProductCard";
import DropDown from "../components/server/DropDown";
import FilterDropdown from "../components/icons/FilterDropdown";

export default async function Homme() {
  const data: any = await client.fetch(`*[gender.fr == "Homme"] {
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
        <FilterDropdown/>
        <DropDown/>
      </div>
      <div className="p-5 grid min-[320px]:grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data.map((product: product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </section>
  );
}
