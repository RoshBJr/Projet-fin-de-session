import { product } from "@/code/types";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../icons/Arrow";
import Heart from "../icons/Heart";

interface Props {
  product: product;
}

function ProductCard({ product}: Props) {

  const en = cookies().get('lang')?.value;

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
          alt={en ? product.name.en : product.name.fr}
          width={800}
          height={800}
          priority={true}
        />
        <div className="flex-1 flex flex-col gap-3 justify-between border-l-0 border-r-0 rounded-[3px] border-2 border-thistle py-2 pb-4 px-4">
          <div className="flex gap-2">
            <span className="font-font-text rounded-full px-3 py-1 border-2 border-thistle">
              {en ? product.gender.en : product.gender.fr}
            </span>
            <span className="font-font-text rounded-full px-3 py-1 border-2 border-thistle">
              {en ? product.category.en : product.category.fr}
            </span>
          </div>
          <h3 className="font-font-titre text-2xl">{en ? product.name.en : product.name.fr}</h3>
          <div className="flex justify-between items-center">
            <span className="font-font-titre text-2xl text-davys-gray">
              ${product.price}
            </span>
            <Link
              className="_btn-carousel hover:bg-davys-gray duration-200 active:scale-105 flex gap-1 items-center justify-center rounded-[8px] py-2 px-2 border border-davys-gray bg-thistle text-alice-blue"
              href={{
                pathname: `/produit/${en ? product.slug_en.current: product.slug_fr.current}`,
                query: {
                  id: product._id,
                },
              }}
            >
              <span className="font-font-titre text-lg">{en ? "See more": "Voir plus"}</span>
              <Arrow customCss="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
