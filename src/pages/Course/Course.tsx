import React, { useState } from "react";

import { useParams } from "react-router";

import useGetData from "../../hooks/useGetData/useGetData";

import FeaturedCourse from "../Landing/FeaturedCourses/FeaturedCourse/FeaturedCourse";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";
import TimesSlot from "./TimesSlot/TimesSlot";

import SessionsType from "./SessionsType/SessionsType";
import CoursePrice from "./CoursePrice/CoursePrice";

import type { CourseTypes } from "./Course.types";

import "./Course.scss";

const Course: React.FC = () => {
  const { id } = useParams();
  const { data: courseData } = useGetData<CourseTypes>({
    endpoint: `courses/${id}`,
  });

  const [daysId, setDaysId] = useState<number>();

  const handleDaysClick = (id: number) => {
    setDaysId(id);
  };

  return (
    <main className="course-main">
      {courseData && <FeaturedCourse courseData={courseData} coursePage />}
      <div className="schedules-container">
        <WeeklySchedule daysId={daysId} handleDaysClick={handleDaysClick} />
        <TimesSlot daysId={daysId} />
        <SessionsType />
        <CoursePrice />
      </div>
    </main>
  );
};

export default Course;
