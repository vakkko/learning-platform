import React from "react";

import LecturerRatingAndHeading from "../../../../components/LecturerRatingAndHeading/LecturerRatingAndHeading";
import ProgressBox from "./ProgressBox/ProgressBox";

import type { EnrolledCourseTypes } from "./EnrolledCourse.types";

import "./EnrolledCourse.scss";

const EnrolledCourse: React.FC<EnrolledCourseTypes> = ({
  image,
  lecturer,
  avgRating,
  progressValue,
  heading,
}) => {
  return (
    <div className="enrolled-course">
      <div className="img-and-text">
        <img src={image} alt="computer " />
        <div>
          <LecturerRatingAndHeading
            heading={heading}
            avgRating={avgRating}
            lecturer={lecturer}
          />
        </div>
      </div>
      <div className="progress-box-and-btn">
        <ProgressBox progressValue={progressValue} />
        <button className="btn-view">View</button>
      </div>
    </div>
  );
};

export default EnrolledCourse;
