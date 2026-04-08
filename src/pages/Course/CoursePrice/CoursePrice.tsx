import React from "react";

import "./CoursePrice.scss";

const CoursePrice: React.FC = () => {
  const isAuthorized = sessionStorage.getItem("token");
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
        <button className="btn-enroll" disabled={!isAuthorized}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CoursePrice;
