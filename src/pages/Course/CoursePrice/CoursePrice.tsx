import React, { useContext } from "react";

import AuthRequiredPlaceholder from "./AuthRequiredPlaceholder/AuthRequiredPlaceholder";

import "./CoursePrice.scss";
import { AppContext, type ContextType } from "../../../context/appContext";

const CoursePrice: React.FC = () => {
  const { authorized } = useContext(AppContext) as ContextType;

  return (
    <div className="price-and-signIn">
      <div className="course-price-container">
        <div className="total-price">
          <span>Total Price</span>
          <span>349$</span>
        </div>

        <div className="additional-prices">
          <div className="additional-price">
            <span>Base Price</span>
            <span>+ $0</span>
          </div>
          <div className="additional-price">
            <span>Session Price</span>
            <span>+ $0</span>
          </div>
        </div>
        <button className="btn-enroll" disabled={!authorized}>
          Enroll Now
        </button>
      </div>
      {!authorized && <AuthRequiredPlaceholder />}
    </div>
  );
};

export default CoursePrice;
