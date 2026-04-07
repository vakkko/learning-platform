import React from "react";

import CarouselContainer from "./CarouselContainer/CarouselContainer";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";

import "./Landing.scss";

const Landing: React.FC = () => {
  return (
    <main>
      <CarouselContainer />
      <FeaturedCourses />
    </main>
  );
};

export default Landing;
