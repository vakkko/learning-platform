import React, { useState } from "react";

import axios from "axios";

import SessionType from "./SessionType/SessionType";
import ProgressBox from "../../Landing/ContinueLearning/EnrolledCourse/ProgressBox/ProgressBox";
import StatusModal from "../../../components/StatusModal/StatusModal";

import type { EnrolledCourseDetailsProps } from "./EnrolledCourseDetails.types";

import { BASE_URL } from "../../../consts/consts";

import "./EnrolledCourseDetails.scss";

const EnrolledCourseDetails: React.FC<EnrolledCourseDetailsProps> = ({
  enrolledData,
  setEnrolledData,
  setShowEnrolledData,
  handleScheduleReset,
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

  const handleRetake = async () => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/enrollments/${enrolledData?.id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (response.status === 204) {
        setEnrolledData(undefined);
        setShowEnrolledData(false);
        handleScheduleReset();
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
          <img src="/images/course/calendar.png" alt="calendar" />
          <span>{enrolledData?.schedule.weeklySchedule.label}</span>
        </section>
        <section>
          <img src="/images/course/watch.png" alt="clock" />
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
        {enrolledData?.progress === 100 ? (
          <button onClick={handleRetake} className="btn-complete">
            Retake
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4995 5.24916V9.74916C22.4995 9.94807 22.4205 10.1388 22.2799 10.2795C22.1392 10.4201 21.9484 10.4992 21.7495 10.4992H17.2495C17.0506 10.4992 16.8598 10.4201 16.7192 10.2795C16.5785 10.1388 16.4995 9.94807 16.4995 9.74916C16.4995 9.55024 16.5785 9.35948 16.7192 9.21883C16.8598 9.07818 17.0506 8.99916 17.2495 8.99916H19.8183L17.3255 6.71541L17.302 6.69291C16.2596 5.65087 14.9332 4.93908 13.4886 4.64648C12.044 4.35388 10.5452 4.49342 9.17942 5.04769C7.81365 5.60195 6.64148 6.54636 5.80934 7.76293C4.97719 8.97951 4.52196 10.4143 4.50052 11.8881C4.47907 13.3619 4.89237 14.8093 5.68877 16.0496C6.48517 17.2899 7.62937 18.268 8.97843 18.8617C10.3275 19.4555 11.8216 19.6386 13.2741 19.3881C14.7266 19.1377 16.0731 18.4648 17.1455 17.4535C17.29 17.3168 17.483 17.2431 17.682 17.2486C17.8809 17.2541 18.0695 17.3385 18.2062 17.4831C18.343 17.6276 18.4167 17.8206 18.4112 18.0196C18.4056 18.2185 18.3213 18.4071 18.1767 18.5438C16.5093 20.1252 14.2975 21.0043 11.9995 20.9992H11.8758C10.4018 20.979 8.9553 20.597 7.66349 19.8869C6.37167 19.1768 5.27406 18.1602 4.46714 16.9265C3.66021 15.6929 3.16866 14.2799 3.03571 12.8117C2.90275 11.3436 3.13245 9.8653 3.70462 8.50674C4.27679 7.14818 5.17391 5.95096 6.31714 5.02031C7.46036 4.08966 8.81468 3.45407 10.2611 3.1694C11.7075 2.88474 13.2016 2.95971 14.6122 3.38774C16.0229 3.81576 17.3068 4.58374 18.3511 5.62416L20.9995 8.04291V5.24916C20.9995 5.05024 21.0785 4.85948 21.2192 4.71883C21.3598 4.57817 21.5506 4.49916 21.7495 4.49916C21.9484 4.49916 22.1392 4.57817 22.2799 4.71883C22.4205 4.85948 22.4995 5.05024 22.4995 5.24916Z"
                fill="white"
              />
            </svg>
          </button>
        ) : (
          <button onClick={handleCompleteClick} className="btn-complete">
            Complete Course
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
                strokeWidth="0.5"
              />
            </svg>
          </button>
        )}
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
