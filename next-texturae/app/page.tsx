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
    <main className="flex flex-wrap justify-center">
      <section className="h-auto flex flex-wrap gap-2 justify-center">
        {
          data.map((product:product) => {
            return(
              <img
                className="w-60 h-auto"
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