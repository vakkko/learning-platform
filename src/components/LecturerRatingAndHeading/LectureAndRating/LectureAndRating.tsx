import React from "react";

import CourseRating from "../../CourseRating/CourseRating";

import type { LectureAndRatingProps } from "./LectureAndRating.types";

import "./LectureAndRating.scss";

const LectureAndRating: React.FC<LectureAndRatingProps> = ({
  lecturer,
  avgRating,
}) => {
  return (
    <div className="lecture-and-rating">
      <p>{lecturer}</p>
      <CourseRating avgRating={avgRating} />
    </div>
  );
};

export default LectureAndRating;
