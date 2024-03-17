import Link from "next/link";
import React from "react";
import Arrow from "../icons/Arrow";

/** 
 * composant Contenu dynamique du Carrousel
*/

interface Props {
  en: boolean;
  nomSing: string;
  nomSingEn: string;
  nomPluriel: string;
  nomPlurielEn: string;
}

function CarouselContent({
  en,
  nomSing,
  nomSingEn,
  nomPluriel,
  nomPlurielEn,
}: Props) {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col
     items-start min-[320px]:justify-start md:gap-10 lg:gap-0 lg:justify-between lg:ml-20 xl:ml-24 md:mb-14 md:mt-28 min-[320px]:ml-5
     min-[320px]:mt-5 min-[320px]:gap-10 min-[320px]:mb-5">
      <h2 className="min-[320px]:text-3xl md:text-6xl lg:text-8xl font-font-titre text-platinum">
        {en
          ? `${
              nomPlurielEn.slice(0, 1).toLocaleUpperCase() + nomPlurielEn.slice(1)
            }'s Collection`
          : `Collection pour ${
              nomSing.slice(0, 1).toLocaleUpperCase() + nomSing.slice(1)
            }`}
      </h2>
      <p className="min-[320px]:w-4/5  lg:w-2/3 xl:w-1/2 text-platinum 
      font-font-text min-[320px]:text-xl lg:text-4xl md:text-3xl">
        {en
          ? `Discover the ${nomPlurielEn}'s collection: a unique blend of urban elegance and modernity. Versatile pieces designed for the modern ${nomSingEn} who values style without compromising on comfort.`
          : `Découvrez la collection pour ${nomPluriel} : un mélange unique
        d'élégance urbaine et de modernité. Des pièces polyvalentes
        conçues pour ${nomSing == "homme" ? `l'${nomSing}` : `la ${nomSing}`} moderne qui valorise le style sans compromis sur le confort.`}
      </p>
      <Link
        href={{
          pathname: `/${nomSing}`,
          query: {
            tri: "name-asc"
          }
        }}
        className="min-[320px]:absolute lg:relative min-[320px]:bottom-0 min-[320px]:left-0 _btn-carousel  hover:bg-davys-gray duration-200 text-xl 
        font-font-titre text-platinum inline-flex 
        lg:items-center min-[320px]:gap-1 lg:gap-3 lg:px-2 lg:py-3 rounded-[8px] min-[320px]:px-2 min-[320px]:py-2"
      >
        <span className="min-[320px]:text-lg lg:text-3xl md:text-2xl">
          {en ? "See the collection" : "Voir la collection"}
        </span>
        <Arrow customCss="h-7 w-7" />
      </Link>
    </div>
  );
}

export default CarouselContent;
