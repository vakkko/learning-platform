import React from "react";

import Button from "../../../../components/Button/Button";

import "./FeaturedCourse.scss";
import type { FeaturedCourseProps } from "./FeaturedCourse.types";

const FeaturedCourse: React.FC<FeaturedCourseProps> = ({
  image,
  avgRating,
  basePrice,
  description,
  instructorName,
  title,
}) => {
  return (
    <div className="featured-course-wrapper">
      <div className="featured-course">
        <img src={image} alt="course" className="course-img" />
        <div className="lecturer-and-rating">
          <p>{instructorName}</p>
          <div>
            <img src="images/star.png" alt="star" />
            <span>{avgRating}</span>
          </div>
        </div>
        <div className="heading-and-description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="price-and-button">
          <p>
            starting from <span className="price">{basePrice}</span>
          </p>
          <Button text="Details" purpleBackground />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourse;
