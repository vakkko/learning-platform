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

  return (
    <div>
      <CarouselItem
        {...carouselItems[currentIndex]}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
};

export default CarouselContainer;
