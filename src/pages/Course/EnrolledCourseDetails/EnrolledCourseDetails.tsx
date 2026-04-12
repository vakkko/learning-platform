import React, { useState } from "react";

import SessionType from "./SessionType/SessionType";

import type { EnrolledCourseDetailsProps } from "./EnrolledCourseDetails.types";

import "./EnrolledCourseDetails.scss";
import ProgressBox from "../../Landing/ContinueLearning/EnrolledCourse/ProgressBox/ProgressBox";
import axios from "axios";
import { BASE_URL } from "../../../consts/consts";
import StatusModal from "../../../components/StatusModal/StatusModal";

const EnrolledCourseDetails: React.FC<EnrolledCourseDetailsProps> = ({
  enrolledData,
  setEnrolledData,
}) => {
  const token = sessionStorage.getItem("token");
  const [rateModal, setRateModal] = useState<boolean>(false);

  const handleCompleteClick = async () => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/enrollments/${enrolledData?.id}/complete`,
        {},
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (response.status === 200) {
        setEnrolledData(response.data.data);
        setRateModal(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
      <div className="progress-bar-and-button">
        <ProgressBox progressValue={enrolledData?.progress} />
        <button onClick={handleCompleteClick} className="btn-complete">
          {enrolledData?.progress === 100 ? "Completed" : "Complete Course"}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5789 6.30087L8.63315 19.7856C8.55801 19.8639 8.46877 19.9261 8.37055 19.9685C8.27232 20.0109 8.16704 20.0328 8.06071 20.0328C7.95438 20.0328 7.84909 20.0109 7.75087 19.9685C7.65264 19.9261 7.56341 19.8639 7.48826 19.7856L1.82452 13.886C1.67269 13.7279 1.5874 13.5134 1.5874 13.2897C1.5874 13.0661 1.67269 12.8516 1.82452 12.6935C1.97634 12.5353 2.18225 12.4465 2.39696 12.4465C2.61167 12.4465 2.81758 12.5353 2.9694 12.6935L8.06071 17.9978L20.434 5.10831C20.5858 4.95017 20.7917 4.86133 21.0064 4.86133C21.2211 4.86133 21.427 4.95017 21.5789 5.10831C21.7307 5.26646 21.816 5.48094 21.816 5.70459C21.816 5.92824 21.7307 6.14273 21.5789 6.30087Z"
              fill="white"
              stroke="currentColor"
              stroke-width="0.5"
            />
          </svg>
        </button>
      </div>
      {rateModal && (
        <StatusModal
          image="congrats"
          title="Congratulations!"
          description={`You've completed “${enrolledData?.course.title}” Course!`}
          handleCancelClick={() => setRateModal(false)}
          showSuccess
          btnCancel="Done"
        />
      )}
    </div>
  );
};

export default EnrolledCourseDetails;
