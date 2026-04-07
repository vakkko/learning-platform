import React, { useState } from "react";

import CarouselItem from "./CarouselItem/CarouselItem";

import { carouselItems } from "../../../consts/consts";

const CarouselContainer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 2 ? 2 : (prevIndex + 1) % carouselItems.length,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : (prevIndex - 1) % carouselItems.length,
    );
  };

  //Switch cards automatically

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
  //   }, 2000);

  //   return () => clearInterval(interval);
  // });

  return (
    <div>
      <CarouselItem
        {...carouselItems[currentIndex]}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default CarouselContainer;
