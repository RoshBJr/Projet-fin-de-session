import Link from "next/link";
import React from "react";
import Arrow from "../icons/Arrow";

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
    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-start justify-between ml-24 mb-14 mt-28">
      <h2 className="text-8xl font-font-titre text-platinum">
        {en
          ? `Collection for ${
              nomSingEn.slice(0, 1).toLocaleUpperCase() + nomSingEn.slice(1)
            }`
          : `Collection pour ${
              nomSing.slice(0, 1).toLocaleUpperCase() + nomSing.slice(1)
            }`}
      </h2>
      <p className=" w-1/2 text-platinum font-font-text text-3xl">
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
        className="_btn-carousel  hover:bg-davys-gray duration-200 text-xl font-font-titre text-platinum inline-flex items-center gap-3 px-2 py-3 rounded-[8px]"
      >
        <span className="text-2xl">
          {en ? "See the collection" : "Voir la collection"}
        </span>
        <Arrow customCss="h-7 w-7" />
      </Link>
    </div>
  );
}

export default CarouselContent;
