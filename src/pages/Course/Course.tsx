import React from "react";

import { useParams } from "react-router";

import useGetData from "../../hooks/useGetData/useGetData";

import FeaturedCourse from "../Landing/FeaturedCourses/FeaturedCourse/FeaturedCourse";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";
import TimesSlot from "./TimesSlot/TimezSlot";

import SessionsType from "./SessionsType/SessionsType";
import CoursePrice from "./CoursePrice/CoursePrice";

import type { CourseTypes } from "./Course.types";

import "./Course.scss";

const Course: React.FC = () => {
  const { id } = useParams();
  const { data: courseData } = useGetData<CourseTypes>({
    endpoint: `courses/${id}`,
  });

  return (
    <main className="course-main">
      {courseData && <FeaturedCourse courseData={courseData} coursePage />}
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
