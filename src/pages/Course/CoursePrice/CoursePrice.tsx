import React, { useContext } from "react";

import AuthRequiredPlaceholder from "./AuthRequiredPlaceholder/AuthRequiredPlaceholder";

import "./CoursePrice.scss";
import { AppContext, type ContextType } from "../../../context/appContext";
import type { CoursePriceProps } from "./CoursePrice.types";

const CoursePrice: React.FC<CoursePriceProps> = ({
  basePrice,
  sessionPrice,
}) => {
  const { authorized } = useContext(AppContext) as ContextType;

  const totalPrice = Number(basePrice) + Number(sessionPrice);

  return (
    <div className="price-and-signIn">
      <div className="course-price-container">
        <div className="total-price">
          <span>Total Price</span>
          <span>{totalPrice} $</span>
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
        <button className="btn-enroll" disabled={!authorized}>
          Enroll Now
        </button>
      </div>
      {!authorized && <AuthRequiredPlaceholder />}
    </div>
  );
};

export default CoursePrice;
