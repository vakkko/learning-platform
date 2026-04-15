import React, { useState } from "react";

import { useParams } from "react-router";

import useGetData from "../../hooks/useGetData/useGetData";

import FeaturedCourse from "../Landing/FeaturedCourses/FeaturedCourse/FeaturedCourse";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";
import TimesSlot from "./TimesSlot/TimesSlot";
import EnrolledCourseDetails from "./EnrolledCourseDetails/EnrolledCourseDetails";
import SessionsType from "./SessionsType/SessionsType";
import CoursePrice from "./CoursePrice/CoursePrice";

import type { CourseTypes } from "./Course.types";
import type { EnrollmentRecord } from "../Landing/ContinueLearning/ContinueLearning.types";

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
  const [courseScheduleId, setCourseScheduleId] = useState<number>();

  const [enrolledData, setEnrolledData] = useState<EnrollmentRecord>();
  const [showEnrolledData, setShowEnrolledData] = useState<boolean>();

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

  const handleDoneCLick = () => {
    setShowEnrolledData(true);
  };

  const handleSessionClick = (id: number, price: number, courseId: number) => {
    setSessionId(id);
    setSessionPrice(price);
    setCourseScheduleId(courseId);
  };

  return (
    <main className="course-main">
      {courseData && <FeaturedCourse courseData={courseData} coursePage />}
      <div className="schedules-container">
        {enrolledData && showEnrolledData ? (
          <EnrolledCourseDetails
            enrolledData={enrolledData}
            setEnrolledData={setEnrolledData}
            setShowEnrolledData={setShowEnrolledData}
          />
        ) : (
          <>
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
              courseId={Number(id)}
              courseTitle={courseData?.title}
              dayValue={dayValue}
              timeValue={timeValue}
              courseScheduleId={courseScheduleId}
              setEnrolledData={setEnrolledData}
              handleDoneCLick={handleDoneCLick}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default Course;
