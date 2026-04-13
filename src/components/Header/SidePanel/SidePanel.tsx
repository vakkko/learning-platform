import React from "react";

import useGetData from "../../../hooks/useGetData/useGetData";

import EmptySidePanel from "./EmptySidePanel/EmptySidePanel";
import EnrolledCourse from "../../../pages/Landing/ContinueLearning/EnrolledCourse/EnrolledCourse";

import type { EnrollmentRecord } from "../../../pages/Landing/ContinueLearning/ContinueLearning.types";

import "./SidePanel.scss";
import CourseDetails from "../../../pages/Course/EnrolledCourseDetails/CourseDetails/CourseDetails";

const SidePanel: React.FC = () => {
  const token = sessionStorage.getItem("token");

  const { data: enrolledData } = useGetData<EnrollmentRecord[]>({
    endpoint: "enrollments",
    token,
  });

  return (
    <>
      <div id="overlay"></div>
      <div className="side-panel-container">
        <div className="side-panel-heading">
          <h2>Enrolled Courses</h2>
          <span>
            Total Enrollments {enrolledData ? enrolledData.length : 0}
          </span>
        </div>
        <div className={`side-panel-content ${!enrolledData ? "empty" : ""}`}>
          {enrolledData ? (
            enrolledData.map((course) => (
              <React.Fragment key={course.id}>
                <EnrolledCourse
                  heading={course.course.title}
                  avgRating={course.course.avgRating}
                  image={course.course.image}
                  lecturer={course.course.instructor.name}
                  progressValue={course.progress}
                  courseId={course.course.id}
                  children={<CourseDetails enrolledData={course} />}
                />
              </React.Fragment>
            ))
          ) : (
            <EmptySidePanel />
          )}
        </div>
      </div>
    </>
  );
};

export default SidePanel;
