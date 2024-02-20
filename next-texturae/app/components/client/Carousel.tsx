"use client";

import carousel from "@/code/continuous-carousel";
import { useEffect } from "react";

function Carousel() {
    
    useEffect(() => {
        let theCarousel = new carousel();
        theCarousel.initialize();
        theCarousel.eventListener();
    },[])

  return (
    <>
      <div className="_carousel relative">
        <div className="carousel-container">
          <div className="carousel-post">
            <img
              src="https://wallpapercave.com/wp/wp2317652.jpg"
              className="w-full h-full"
            />
          </div>
          <div className="carousel-post">
            <img
              src='https://wallpapercave.com/wp/wp2317655.jpg'
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="carousel-controls absolute z-[101] mr-7 mb-5 bottom-0 right-0 flex gap-4">
          <button className="btn btn-circle" id="prevBtn">❮</button>
          <button className="btn btn-circle" id="nextBtn">❯</button>
        </div>
        <div className="_hero-shadow absolute top-0 bottom-0 right-0 left-0 z-[100]">

        </div>
      </div>
    </>
  );
}

export default Carousel;
