import React from "react";

import CarouselContainer from "./CarouselContainer/CarouselContainer";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";

import "./Landing.scss";
import ContinueLearning from "./ContinueLearning/ContinueLearning";

const Landing: React.FC = () => {
  return (
    <main className="landing-main">
      <CarouselContainer />
      <FeaturedCourses />
      <ContinueLearning />
    </main>
  );
};

export default Landing;
