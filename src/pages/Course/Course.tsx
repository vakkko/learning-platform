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

  const [dayValue, setDayValue] = useState<string>();
  const [timeValue, setTimeValue] = useState<string>();

  const handleDaysClick = (id: number, dayValue: string) => {
    setDaysId(id);
    setDayValue(dayValue);
  };

  const handleTimeClick = (id: number, timeValue: string) => {
    setTimeId(id);
    setTimeValue(timeValue);
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
          timeId={timeId}
          courseId={Number(id)}
          courseTitle={courseData?.title}
          dayValue={dayValue}
          timeValue={timeValue}
        />
      </div>
    </main>
  );
};

export default Course;
