import { product } from "@/code/types";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../icons/Arrow";

interface Props {
  product: product;
}

function ProductCard({ product }: Props) {
  return (
    <>
      <div className="flex flex-col relative border-2 border-thistle rounded-[8px] overflow-hidden">
        <Image
          className="min-[320px]:w-full md:w-[1/2] min-[500px]:w-[1/2] lg:w-[1/3]  xl:w-[1/4] h-[500px]
            object-cover object-bottom"
          src={product.defaultImg}
          alt={product.name.en}
          width={800}
          height={800}
          priority={true}
        />
        <div className="flex-1 flex flex-col gap-3 rounded-[8px] border-2 border-thistle py-2 px-4">
          <div className="flex gap-2">
            <span className="font-font-text rounded-full px-3 py-1 border border-thistle" >{product.gender.fr}</span>
            <span className="font-font-text rounded-full px-3 py-1 border border-thistle" >{product.category.fr}</span>
          </div>
          <h3>{product.name.fr}</h3>
          <span>${product.price}</span>
          <Link
            href={{
              pathname: `/produit/${product.slug_en.current}`,
              query: {
                id: product._id,
              },
            }}
          >
            <span>Voir plus</span>
            <Arrow height="6" width="6" rotate={false}/>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
