"use client";

import carousel from "@/code/continuous-carousel";
import Link from "next/link";
import { useEffect } from "react";

function Carousel() {
  useEffect(() => {
    let theCarousel = new carousel();
    theCarousel.initialize();
    theCarousel.eventListener();
  }, []);

  return (
    <>
      <div className="_carousel relative">
        <div className="carousel-container">
          <div className="carousel-post">
            <div className="_hero-shadow pointer-events-none absolute top-0 bottom-0 right-0 left-0"></div>
            <img
              src="https://wallpapercave.com/wp/wp2317652.jpg"
              className="w-full h-full"
            />
            {/* Peux creer un component hero content */}
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-start justify-between ml-24 mb-14 mt-28">
              <h2 className="text-8xl font-font-titre text-platinum">
                Collection pour Femme
              </h2>
              <p className=" w-1/2 text-platinum font-font-text text-3xl">
                Découvrez la collection pour femmes : un mélange unique
                d'élégance urbaine et de modernité. Des pièces polyvalentes
                conçues pour la femme moderne qui valorise le style sans
                compromis sur le confort.
              </p>
              <Link
                href="/femme"
                className="_btn-carousel  hover:bg-davys-gray duration-200 text-xl font-font-titre text-platinum inline-flex items-center gap-3 px-2 py-3 rounded-[8px]"
              >
                <span className="text-2xl">Voir la collection</span>
                {/* create icon component */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                {/* create icon component */}
              </Link>
            </div>
            {/* Peux creer un component hero content */}
          </div>
          <div className="carousel-post">
            <div className="_hero-shadow pointer-events-none absolute top-0 bottom-0 right-0 left-0"></div>
            <img
              src="https://wallpapercave.com/wp/wp2317655.jpg"
              className="w-full h-full"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-start justify-between ml-24 mb-14 mt-28">
              <h2 className="text-8xl font-font-titre text-platinum">
                Collection pour Homme
              </h2>
              <p className=" w-1/2 text-platinum font-font-text text-3xl">
                Découvrez la collection pour hommes : un mélange unique
                d'élégance urbaine et de modernité. Des pièces polyvalentes
                conçues pour l'homme moderne qui valorise le style sans
                compromis sur le confort.
              </p>
              <Link
                href="/homme"
                className="_btn-carousel  hover:bg-davys-gray duration-200 text-xl font-font-titre text-platinum inline-flex items-center gap-3 px-2 py-3 rounded-[8px]"
              >
                <span className="text-2xl">Voir la collection</span>
                {/* create icon component */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                {/* create icon component */}
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-controls z-[100] absolute mr-24 mb-14 bottom-0 right-0 flex gap-8">
          <button className="text-platinum hover:bg-platinum hover:text-davys-gray p-4 duration-200 rounded-full inline-flex justify-center items-center" id="prevBtn">
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
          </button>
          <button className="text-platinum hover:bg-platinum hover:text-davys-gray p-4 duration-200 rounded-full inline-flex justify-center items-center" id="nextBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
