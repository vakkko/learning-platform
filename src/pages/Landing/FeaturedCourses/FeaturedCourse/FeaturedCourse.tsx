import React from "react";

import { Link } from "react-router";

import CourseRating from "./CourseRating/CourseRating";

import type { FeaturedCourseProps } from "./FeaturedCourse.types";

import "./FeaturedCourse.scss";
import CategoryBox from "./CategoryBox/CategoryBox";

const FeaturedCourse: React.FC<FeaturedCourseProps> = ({
  courseData,
  coursePage,
}) => {
  return (
    <div
      className={`featured-course-wrapper ${coursePage ? "personal-page" : ""}`}
    >
      <div className="featured-course">
        {coursePage && <h1>{courseData.title}</h1>}
        <img src={courseData.image} alt="course" className="course-img" />
        {coursePage ? (
          <div className="duration-hours-and-rating">
            <div className="hours-and-weeks">
              <div>
                <img src="images/course/calendar.png" alt="calendar" />
                <span>{courseData.durationWeeks} Weeks</span>
              </div>
              <div>
                <img src="images/course/watch.png" alt="watch" />
                <span>128 Hours</span>
              </div>
            </div>
            <div className="rating-and-category">
              <CourseRating avgRating={courseData.avgRating} />
              <CategoryBox
                category={courseData.category.name}
                image="images/course/closing-tag.png"
              />
            </div>
          </div>
        ) : (
          <div className="lecturer-and-rating">
            <p>{courseData.instructor.name}</p>
            <CourseRating avgRating={courseData.avgRating} />
          </div>
        )}
        <div className="heading-and-description">
          {!coursePage && <h3>{courseData.title}</h3>}
          {coursePage && (
            <div className="instrucotr-and-heading">
              <CategoryBox
                category={courseData.instructor.name}
                image={courseData.instructor.avatar}
              />
              <h4>Course Description</h4>
            </div>
          )}
          <p>{courseData.description}</p>
        </div>
        {!coursePage && (
          <div className="price-and-button">
            <p>
              starting from{" "}
              <span className="price">{courseData.basePrice}</span>
            </p>
            <Link to={String(courseData.id)} state={{ courseData }}>
              Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCourse;
