import { product } from "@/code/types";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../icons/Arrow";
import Heart from "../icons/Heart";
import { redirect } from "next/navigation";

interface Props {
  product: product;
  theQuery: string[];
}

function ProductCard({ product, theQuery }: Props) {
  const lang = cookies().get("lang")?.value ? "en" : "fr";

  return (
    <>
      <div className="flex flex-col relative border-2 border-thistle rounded-[8px] overflow-hidden">
        <Heart
          customCss="absolute top-0 right-0 mr-4 mt-4 stroke-davys-gray
            hover:fill-davys-gray duration-200 cursor-pointer active:scale-105"
        />
        <Image
          className="min-[320px]:w-full md:w-[1/2] min-[500px]:w-[1/2] lg:w-[1/3]  xl:w-[1/4] h-[500px]
            object-cover object-center"
          src={product.defaultImg}
          alt={product.name[lang]}
          width={800}
          height={800}
          priority={true}
        />
        <div className="flex-1 flex flex-col gap-3 justify-between border-l-0 border-r-0 rounded-[3px] border-2 border-thistle py-2 pb-4 px-4">
          <div className="flex gap-2">
            <span className="font-font-text rounded-full px-3 py-1 border-2 border-thistle">
              {product.gender[lang]}
            </span>
            <span className="font-font-text rounded-full px-3 py-1 border-2 border-thistle">
              {product.category[lang]}
            </span>
          </div>
          <h3 className="font-font-titre text-2xl">{product.name[lang]}</h3>
          <div className="flex justify-between items-center">
            <span className="font-font-titre text-2xl text-davys-gray">
              ${product.price}
            </span>
            <form action={async () => {
              'use server';
              await cookies().set('produit', JSON.stringify(product));
              redirect(`/produit/${product.slug_fr.current}?id=${product._id}&color=0&size=0&material=0&pattern=0`);
            }}>
              <button
                type="submit"
                className="_btn-carousel hover:bg-davys-gray duration-200 active:scale-105 flex gap-1 items-center justify-center rounded-[8px] py-2 px-2 border border-davys-gray bg-thistle text-alice-blue"
              >
                <span className="font-font-titre text-lg">
                  {lang == "en" ? "See more" : "Voir plus"}
                </span>
                <Arrow customCss="h-6 w-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  async function cookieSingle(product:any) {
    'use server';
    cookies().set('produit', JSON.stringify(product));
  }
}

export default ProductCard;
