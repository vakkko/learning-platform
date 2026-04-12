import React from "react";

import SessionType from "./SessionType/SessionType";

import type { EnrolledCourseDetailsProps } from "./EnrolledCourseDetails.types";

import "./EnrolledCourseDetails.scss";

const EnrolledCourseDetails: React.FC<EnrolledCourseDetailsProps> = ({
  enrolledData,
}) => {
  return (
    <div className="enrolled-course-details-contaienr">
      {enrolledData?.progress === 100 ? (
        <span className="indicator completed">Completed</span>
      ) : (
        <span className="indicator enrolled">Enrolled</span>
      )}
      <div className="enrolled-course-details">
        <section>
          <img src="images/course/calendar.png" alt="calendar" />
          <span>{enrolledData?.schedule.weeklySchedule.label}</span>
        </section>
        <section>
          <img src="images/course/watch.png" alt="clock" />
          <span>{enrolledData?.schedule.timeSlot.label}</span>
        </section>
        <SessionType
          id={enrolledData?.schedule.sessionType.id}
          name={enrolledData?.schedule.sessionType.name.replace("_", "")}
        />
        <SessionType
          id={enrolledData?.schedule.sessionType.id}
          name={enrolledData?.schedule.location}
          location
        />
      </div>
    </div>
  );
};

export default EnrolledCourseDetails;
