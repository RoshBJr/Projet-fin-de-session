import Image from "next/image";
import { Inter } from "next/font/google";
import {client} from '../code/sanityClient';
import { product } from "@/code/types";

const inter = Inter({ subsets: ["latin"] });


export default async function Home() {
    const data:any = await client.fetch(`*[_type == "product"] {
      _id,
      name,
      category,
      colors,
      description,
      gender,
      defaultImg,
      image[]{ "imgUrl": asset->url }
    }`);

    // console.log(data.map(prod => prod.name.en));

  return (
    <main className="pt-[80px] bg-platinum">
      <section className="p-5 grid min-[320px]:grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {
          data.map((product:product) => {
            return(
              <img
                className="min-[320px]:w-full md:w-[1/2] min-[500px]:w-[1/2] lg:w-[1/3]  xl:w-[1/4] h-auto"
                src={product.defaultImg}
                alt={product.name.en}
              />
            )
          })
        }
      </section>
    </main>
  );
}