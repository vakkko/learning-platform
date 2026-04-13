import React from "react";

import EnrolledCourse from "./EnrolledCourse/EnrolledCourse";

import LoginRedirection from "./LoginRedirection/LoginRedirection";

import type { ContinueLearningInterface } from "./ContinueLearning.types";

import "./ContinueLearning.scss";

const ContinueLearning: React.FC<ContinueLearningInterface> = ({
  isAuthorized,
  enrolledData,
}) => {
  return (
    <>
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
          <>
            <div
              className={`enrolled-courses ${!isAuthorized ? "blured" : ""}`}
            >
              {enrolledData ? (
                enrolledData.map((course, index) => {
                  if (index < 3) {
                    return (
                      <React.Fragment key={course.id}>
                        <EnrolledCourse
                          heading={course.course.title}
                          avgRating={course.course.avgRating}
                          image={course.course.image}
                          lecturer={course.course.instructor.name}
                          progressValue={course.progress}
                          courseId={course.course.id}
                        />
                      </React.Fragment>
                    );
                  }
                })
              ) : (
                <>
                  <EnrolledCourse
                    avgRating={4.9}
                    progressValue={65}
                    image="images/computer.png"
                    lecturer="Lecturer Marilyn Mango"
                    heading="Advanced React & TypeScript Development "
                    courseId={0}
                  />
                  <EnrolledCourse
                    avgRating={4.9}
                    progressValue={65}
                    image="images/computer.png"
                    lecturer="Lecturer Marilyn Mango"
                    heading="Advanced React & TypeScript Development "
                    courseId={0}
                  />
                  <EnrolledCourse
                    avgRating={4.9}
                    progressValue={65}
                    image="images/computer.png"
                    lecturer="Lecturer Marilyn Mango"
                    heading="Advanced React & TypeScript Development "
                    courseId={0}
                  />
                </>
              )}
            </div>

            {!isAuthorized && <LoginRedirection />}
          </>
        </div>
      </div>
    </>
  );
};

export default ContinueLearning;
