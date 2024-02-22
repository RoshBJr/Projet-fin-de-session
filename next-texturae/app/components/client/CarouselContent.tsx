import Link from 'next/link'
import React from 'react'
import Arrow from '../icons/Arrow'

interface Props {
    category:string;
}

function CarouselContent({category}:Props) {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-start justify-between ml-24 mb-14 mt-28">
    <h2 className="text-8xl font-font-titre text-platinum">
      Collection pour {category.slice(0,1).toLocaleUpperCase()+category.slice(1)}
    </h2>
    <p className=" w-1/2 text-platinum font-font-text text-3xl">
      Découvrez la collection pour {category}s : un mélange unique
      d'élégance urbaine et de modernité. Des pièces polyvalentes
      conçues pour {category == "homme" ? `l'${category}` : `la ${category}`} moderne qui valorise le style sans
      compromis sur le confort.
    </p>
    <Link
      href={`/${category}`}
      className="_btn-carousel  hover:bg-davys-gray duration-200 text-xl font-font-titre text-platinum inline-flex items-center gap-3 px-2 py-3 rounded-[8px]"
    >
      <span className="text-2xl">Voir la collection</span>
      <Arrow height="6" width="6" rotate={false} />
    </Link>
  </div>
  )
}

export default CarouselContent