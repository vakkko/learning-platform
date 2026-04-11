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
  const [timeId, setTimeId] = useState<number>();
  const [sessionId, setSessionId] = useState<number>();
  const [sessionPrice, setSessionPrice] = useState<number>();

  const handleDaysClick = (id: number) => {
    setDaysId(id);
  };

  const handleTimeClick = (id: number) => {
    setTimeId(id);
  };

  const handleSessionClick = (id: number, price: number) => {
    setSessionId(id);
    setSessionPrice(price);
  };

  return (
    <main className="course-main">
      {courseData && <FeaturedCourse courseData={courseData} coursePage />}
      <div className="schedules-container">
        <WeeklySchedule daysId={daysId} handleDaysClick={handleDaysClick} />
        <TimesSlot
          daysId={daysId}
          handleTimeClick={handleTimeClick}
          timeId={timeId}
        />
        <SessionsType
          handleSessionClick={handleSessionClick}
          sessionId={sessionId}
          daysId={daysId}
          timeId={timeId}
        />
        <CoursePrice
          basePrice={courseData?.basePrice}
          sessionPrice={sessionPrice}
          activeStyle={!!daysId && !!timeId && !!sessionId}
        />
      </div>
    </main>
  );
};

export default Course;
