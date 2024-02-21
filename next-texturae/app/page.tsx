import Image from "next/image";
import {client} from '../code/sanityClient';
import { product } from "@/code/types";
import Link from "next/link";
import Hero from "./components/server/Hero";

export default async function Home() {
    // console.log(data.map(prod => prod.name.en));

  return (
    <main className="pt-[80px] bg-platinum">
      <Hero/>
    </main>
  );
}