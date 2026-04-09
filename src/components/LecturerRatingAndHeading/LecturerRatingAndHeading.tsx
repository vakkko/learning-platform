import React from "react";

import LectureAndRating from "./LectureAndRating/LectureAndRating";

import type { LecturerRatingAndHeadingProps } from "./LecturerRatingAndHeading.types";

import "./LecturerRatingAndHeading.scss";

const LecturerRatingAndHeading: React.FC<LecturerRatingAndHeadingProps> = ({
  avgRating,
  lecturer,
  heading,
}) => {
  return (
    <div className="lecturer-and-heading">
      <LectureAndRating avgRating={avgRating} lecturer={lecturer} />
      <h3>{heading}</h3>
    </div>
  );
};

export default LecturerRatingAndHeading;
