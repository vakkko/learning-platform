import React from "react";

import { useLocation } from "react-router";

import FeaturedCourse from "../Landing/FeaturedCourses/FeaturedCourse/FeaturedCourse";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";
import TimesSlot from "./TimesSlot/TimezSlot";

import SessionsType from "./SessionsType/SessionsType";

import "./Course.scss";
import CoursePrice from "./CoursePrice/CoursePrice";

const Course: React.FC = () => {
  const location = useLocation();
  const { courseData } = location.state;

  return (
    <main className="course-main">
      <FeaturedCourse courseData={courseData} coursePage />
      <div className="schedules-container">
        <WeeklySchedule />
        <TimesSlot />
        <SessionsType />
        <CoursePrice />
      </div>
    </main>
  );
};

export default Course;
