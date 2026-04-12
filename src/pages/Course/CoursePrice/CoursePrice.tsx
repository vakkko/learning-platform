import React, { useContext, useState } from "react";

import axios, { AxiosError } from "axios";

import AuthRequiredPlaceholder from "./AuthRequiredPlaceholder/AuthRequiredPlaceholder";
import StatusModal from "../../../components/StatusModal/StatusModal";

import { AppContext, type ContextType } from "../../../context/appContext";
import type { CoursePriceProps } from "./CoursePrice.types";

import "./CoursePrice.scss";
import { BASE_URL } from "../../../consts/consts";

const CoursePrice: React.FC<CoursePriceProps> = ({
  basePrice,
  sessionPrice,
  courseId,
  activeStyle,
  courseTitle,
  dayValue,
  timeValue,
  courseScheduleId,
  setEnrolledData,
  handleDoneCLick,
}) => {
  const { authorized, setShowUserModal, setShowLogin } = useContext(
    AppContext,
  ) as ContextType;

  const [showProfileRedirection, setShowProfileRedirection] =
    useState<boolean>(false);
  const [enrollmentConflict, setEnrollmentConflict] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const totalPrice = sessionPrice
    ? Number(basePrice) + Number(sessionPrice)
    : Number(basePrice);

  const completedProfile =
    sessionStorage.getItem("completedProfile") !== "false";

  const token = sessionStorage.getItem("token");

  const handleEnrollClick = () => {
    if (!authorized) {
      setShowLogin(true);
    } else if (!completedProfile) {
      setShowProfileRedirection(true);
    } else if (completedProfile && courseScheduleId && courseId) {
      const enrollCourse = async () => {
        try {
          const response = await axios.post(
            `${BASE_URL}/enrollments`,
            {
              courseId: Number(courseId),
              courseScheduleId: courseScheduleId,
              force: !!enrollmentConflict,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (response.status === 201) {
            setShowSuccessModal(true);
            setEnrolledData(response.data.data);
          }
        } catch (err) {
          const axiosError = err as AxiosError;
          if (axiosError.status === 409) {
            setEnrollmentConflict(true);
          } else {
            console.error("Enrollment error:", err);
          }
        }
      };
      enrollCourse();
    }
  };

  return (
    <div className="price-and-signIn">
      <div className="course-price-container">
        <div className="total-price">
          <span>Total Price</span>
          <span>{totalPrice ? totalPrice : "0.00"} $</span>
        </div>

        <div className="additional-prices">
          <div className="additional-price">
            <span>Base Price</span>
            <span>+ ${basePrice}</span>
          </div>
          <div className="additional-price">
            <span>Session Price</span>
            <span>+ ${sessionPrice ? sessionPrice : 0}</span>
          </div>
        </div>
        <button
          onClick={handleEnrollClick}
          className="btn-enroll"
          disabled={!activeStyle}
        >
          Enroll Now
        </button>
      </div>
      {!authorized && <AuthRequiredPlaceholder />}
      {showProfileRedirection && (
        <StatusModal
          image="user-modal"
          title="Complete your profile to continue"
          description="You need to complete your profile before enrolling in this course."
          btnConfirm="Complete Profile"
          btnCancel="Cancel"
          handleConfirmClick={() => {
            setShowUserModal(true);
            setShowProfileRedirection(false);
          }}
          handleCancelClick={() => setShowProfileRedirection(false)}
        />
      )}
      {enrollmentConflict && (
        <StatusModal
          image="warning"
          title="Enrollment Conflict"
          description={`You are already enrolled in 
          ${courseTitle} with the same schedule: 
          ${dayValue} at ${timeValue} `}
          btnConfirm="Continue Anyway"
          btnCancel="Cancel"
          handleConfirmClick={() => handleEnrollClick()}
          handleCancelClick={() => setEnrollmentConflict(false)}
        />
      )}
      {showSuccessModal && (
        <StatusModal
          image="confirm"
          title="Enrollment Confirmed!"
          description={`You've successfully enrolled to the “${courseTitle}” Course!`}
          handleCancelClick={() => {
            setShowSuccessModal(false);
            setEnrollmentConflict(false);
            handleDoneCLick();
          }}
          btnCancel="Done"
        />
      )}
    </div>
  );
};

export default CoursePrice;
