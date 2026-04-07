import React from "react";

import "./FeaturedCourses.scss";

const FeaturedCourses: React.FC = () => {
  return (
    <div className="featured-courses-container">
      <div className="featured-courses-heading">
        <h2>Start Learning Today</h2>
        <p>Choose from our most popular courses and begin your journey</p>
      </div>
      <div className="courses-row"></div>
    </div>
  );
};

export default FeaturedCourses;
