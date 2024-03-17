"use client";

import carousel from "@/code/continuous-carousel";
import { useEffect, useState } from "react";
import Arrow from "../icons/Arrow";
import CarouselContent from "./CarouselContent";

/**
 * composant Carrousel
 */

function Carousel() {
  const [en, setEn] = useState<boolean>(false);
  
  useEffect(() => {
    let theCarousel = new carousel();
    theCarousel.initialize();
    theCarousel.eventListener();
    theCarousel.autoScroll();
  }, []);

  useEffect(()=> {
    if(document !== undefined) {
      setEn(document.cookie.includes("lang=en"));
    }
  })

  return (
    <>
      <div className="_carousel relative min-[320px]:h-[70vh]  lg:h-[calc(100vh-80px)]">
        <div className="carousel-container min-[320px]:h-[70vh] lg:h-[calc(100vh-80px)]">
          <div className="carousel-post h-full">
            <div className="_hero-shadow pointer-events-none absolute top-0 bottom-0 right-0 left-0"></div>
            <img
              src="https://images.pexels.com/photos/6050435/pexels-photo-6050435.jpeg"
              className="w-full h-full object-cover object-center"
            />
            <CarouselContent en={en} nomSing="homme" nomSingEn="man" nomPluriel="hommes" nomPlurielEn="men" />
          </div>
          <div className="carousel-post h-full">
            <div className="_hero-shadow pointer-events-none absolute top-0 bottom-0 right-0 left-0"></div>
            <img
              src="https://images.pexels.com/photos/8306365/pexels-photo-8306365.jpeg"
              className="w-full h-full object-cover object-center"
            />
            <CarouselContent en={en} nomSing="femme" nomSingEn="woman" nomPluriel="femmes" nomPlurielEn="women"/>
          </div>
        </div>
        <div className="carousel-controls z-[100] absolute xl:mr-24 md:mb-10 md:mr-10 xl:mb-14 
        min-[320px]:mr-2 min-[320px]:mb-2 bottom-0 right-0 flex lg:gap-8 min-[320px]:gap-1">
          <button
            className="text-platinum xl:hover:bg-platinum xl:hover:text-davys-gray p-4 duration-200 rounded-full inline-flex justify-center items-center"
            id="prevBtn"
          >
            <Arrow customCss="md:h-12 md:w-12 rotate-180 min-[320px]:h-7 min-[320px]:w-7" />
          </button>
          <button
            className="text-platinum xl:hover:bg-platinum xl:hover:text-davys-gray p-4 duration-200 rounded-full inline-flex justify-center items-center"
            id="nextBtn"
          >
            <Arrow customCss="md:h-12 md:w-12 min-[320px]:h-7 min-[320px]:w-7" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
