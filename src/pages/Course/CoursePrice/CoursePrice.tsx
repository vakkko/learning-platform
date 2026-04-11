import React, { useContext } from "react";

import axios from "axios";

import AuthRequiredPlaceholder from "./AuthRequiredPlaceholder/AuthRequiredPlaceholder";

import { AppContext, type ContextType } from "../../../context/appContext";
import type { CoursePriceProps } from "./CoursePrice.types";

import "./CoursePrice.scss";
import { BASE_URL } from "../../../consts/consts";

const CoursePrice: React.FC<CoursePriceProps> = ({
  basePrice,
  sessionPrice,
  activeStyle,
  timeId,
  courseId,
}) => {
  const { authorized, setShowUserModal, setShowLogin } = useContext(
    AppContext,
  ) as ContextType;

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
      setShowUserModal(true);
    } else if (completedProfile && timeId && courseId) {
      const enrollCourse = async () => {
        try {
          const response = await axios.post(
            `${BASE_URL}/enrollments`,
            {
              courseId: Number(courseId),
              courseScheduleId: timeId,
              force: false,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
        } catch (err) {
          console.error(err);
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
    </div>
  );
};

export default CoursePrice;
