import React from "react";

import type { CourseRatingProps } from "./CourseRating.types";

import "./CourseRating.scss";

const CourseRating: React.FC<CourseRatingProps> = ({ avgRating }) => {
  return (
    <div className="rating-box">
      <img className="star-img" src="images/star.png" alt="star" />
      <span>{avgRating}</span>
    </div>
  );
};

export default CourseRating;
