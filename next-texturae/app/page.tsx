import Image from "next/image";
import {client} from '../code/sanityClient';
import { product } from "@/code/types";
import Link from "next/link";
import Hero from "./components/server/Hero";

export default async function Home() {
    // const data:any = await client.fetch(`*[_type == "product"] {
    //   _id,
    //   name,
    //   category,
    //   colors,
    //   description,
    //   gender,
    //   slug_en,
    //   slug_fr,
    //   defaultImg,
    //   image[]{ "imgUrl": asset->url }
    // }`);

    // console.log(data.map(prod => prod.name.en));

  return (
    <main className="pt-[80px] bg-platinum">
      <Hero/>
    </main>
  );
}