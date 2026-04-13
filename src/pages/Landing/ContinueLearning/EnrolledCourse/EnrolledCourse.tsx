import React from "react";

import LecturerRatingAndHeading from "../../../../components/LecturerRatingAndHeading/LecturerRatingAndHeading";
import ProgressBox from "./ProgressBox/ProgressBox";

import type { EnrolledCourseTypes } from "./EnrolledCourse.types";

import "./EnrolledCourse.scss";
import { Link } from "react-router";

const EnrolledCourse: React.FC<EnrolledCourseTypes> = ({
  image,
  lecturer,
  avgRating,
  progressValue,
  heading,
  courseId,
  children,
  handleCloseEnroll,
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
          {children && children}
        </div>
      </div>
      <div className="progress-box-and-btn">
        <ProgressBox progressValue={progressValue} />
        <Link
          onClick={handleCloseEnroll}
          to={`${courseId}`}
          className="btn-view"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default EnrolledCourse;
