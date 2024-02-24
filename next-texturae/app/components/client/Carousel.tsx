"use client";

import carousel from "@/code/continuous-carousel";
import { useEffect, useState } from "react";
import Arrow from "../icons/Arrow";
import CarouselContent from "./CarouselContent";

function Carousel() {
  const [en, setEn] = useState<boolean>(false);
  useEffect(() => {
    let theCarousel = new carousel();
    theCarousel.initialize();
    theCarousel.eventListener();
  }, []);

  useEffect(() => {
    setEn(document.cookie.includes('lang=en'));
  },[document.cookie]);

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
            <CarouselContent en={en} nomSing="homme" nomSingEn="man" nomPluriel="hommes" nomPlurielEn="men" />
          </div>
          <div className="carousel-post">
            <div className="_hero-shadow pointer-events-none absolute top-0 bottom-0 right-0 left-0"></div>
            <img
              src="https://wallpapercave.com/wp/wp2317655.jpg"
              className="w-full h-full"
            />
            <CarouselContent en={en} nomSing="femme" nomSingEn="woman" nomPluriel="femmes" nomPlurielEn="women"/>
          </div>
        </div>
        <div className="carousel-controls z-[100] absolute mr-24 mb-14 bottom-0 right-0 flex gap-8">
          <button
            className="text-platinum hover:bg-platinum hover:text-davys-gray p-4 duration-200 rounded-full inline-flex justify-center items-center"
            id="prevBtn"
          >
            <Arrow customCss="h-12 w-12 rotate-180" />
          </button>
          <button
            className="text-platinum hover:bg-platinum hover:text-davys-gray p-4 duration-200 rounded-full inline-flex justify-center items-center"
            id="nextBtn"
          >
            <Arrow customCss="h-12 w-12" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
