import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 10000,
  className,
}) => {
  const [curr, setCurr] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`group overflow-hidden relative w-[80vw] h-[100%] md:w-[95vw] lg:w-[70vw] lg:h-[800px]`}
    >
      <div
        className="flex transition-transform ease-out duration-500 md:gap-5 lg:gap-12"
        style={{
          transform: `translateX(-${
            curr * (viewportWidth <= 480 ? 100 : viewportWidth <= 768 ? 40 : 48)
          }%)`,
        }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between ">
        <button
          onClick={prev}
          className="p-3 hover:scale-110 transition-all duration-300 ease-in-out rounded-full shadow -bg-white/10 text-gray-800 hover:bg-white group-hover:-bg-white/50"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-3 hover:scale-110 rounded-full shadow -bg-white/10 text-gray-800 group-hover:-bg-white/50"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
