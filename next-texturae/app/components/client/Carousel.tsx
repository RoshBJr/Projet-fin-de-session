"use client";

import carousel from "@/code/continuous-carousel";
import { useEffect } from "react";
import Arrow from "../icons/Arrow";
import CarouselContent from "./CarouselContent";

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
            <CarouselContent category="homme" />
          </div>
          <div className="carousel-post">
            <div className="_hero-shadow pointer-events-none absolute top-0 bottom-0 right-0 left-0"></div>
            <img
              src="https://wallpapercave.com/wp/wp2317655.jpg"
              className="w-full h-full"
            />
            <CarouselContent category="femme" />
          </div>
        </div>
        <div className="carousel-controls z-[100] absolute mr-24 mb-14 bottom-0 right-0 flex gap-8">
          <button
            className="text-platinum hover:bg-platinum hover:text-davys-gray p-4 duration-200 rounded-full inline-flex justify-center items-center"
            id="prevBtn"
          >
            <Arrow height="12" width="12" rotate={true} />
          </button>
          <button
            className="text-platinum hover:bg-platinum hover:text-davys-gray p-4 duration-200 rounded-full inline-flex justify-center items-center"
            id="nextBtn"
          >
            <Arrow height="12" width="12" rotate={false} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
