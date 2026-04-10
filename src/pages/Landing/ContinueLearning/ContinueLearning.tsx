import React from "react";

import EnrolledCourse from "./EnrolledCourse/EnrolledCourse";

import LoginRedirection from "./LoginRedirection/LoginRedirection";
import useGetData from "../../../hooks/useGetData/useGetData";

import type { EnrolledCourseTypes } from "./ContinueLearning.types";

import "./ContinueLearning.scss";

const ContinueLearning: React.FC = () => {
  const isAuthorized = sessionStorage.getItem("token");

  const { data: enrolledData } = useGetData<EnrolledCourseTypes[]>({
    endpoint: "enrollments",
    token: isAuthorized,
  });

  return (
    <>
      {!enrolledData && (
        <div className="continue-learning-container">
          <div className="heading-and-button">
            <h2>Continue Learning</h2>
            <div>
              <p>Pick up where you left</p>
              <button>See All</button>
            </div>
          </div>
          <div
            className={`enrolled-courses-container ${!isAuthorized ? "raw-data" : ""}`}
          >
            {!isAuthorized && (
              <>
                <div
                  className={`enrolled-courses ${!isAuthorized ? "blured" : ""}`}
                >
                  <EnrolledCourse
                    avgRating={4.9}
                    progressValue={65}
                    image="images/computer.png"
                    lecturer="Lecturer Marilyn Mango"
                    heading="Advanced React & TypeScript Development "
                  />
                  <EnrolledCourse
                    avgRating={4.9}
                    progressValue={65}
                    image="images/computer.png"
                    lecturer="Lecturer Marilyn Mango"
                    heading="Advanced React & TypeScript Development "
                  />
                  <EnrolledCourse
                    avgRating={4.9}
                    progressValue={65}
                    image="images/computer.png"
                    lecturer="Lecturer Marilyn Mango"
                    heading="Advanced React & TypeScript Development "
                  />
                </div>
                <LoginRedirection />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContinueLearning;
