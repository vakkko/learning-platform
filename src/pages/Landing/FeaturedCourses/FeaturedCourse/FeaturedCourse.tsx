import React from "react";

import { Link } from "react-router";

import CourseRating from "../../../../components/CourseRating/CourseRating";

import type { FeaturedCourseProps } from "./FeaturedCourse.types";

import CategoryBox from "./CategoryBox/CategoryBox";
import LecturerRatingAndHeading from "../../../../components/LecturerRatingAndHeading/LecturerRatingAndHeading";

import type { CourseTypes } from "../../../Course/Course.types";

import "./FeaturedCourse.scss";
import Category from "../../../Browse/FilterSidebar/Category/Category";

const FeaturedCourse: React.FC<FeaturedCourseProps> = ({
  courseData,
  coursePage,
  removeDescription,
}) => {
  const rating = courseData.avgRating
    ? courseData.avgRating
    : (courseData as CourseTypes).reviews.length > 0
      ? (
          (courseData as CourseTypes).reviews.reduce(
            (a, b) => a + b.rating,
            0,
          ) / (courseData as CourseTypes).reviews.length
        ).toFixed(1)
      : "";

  const categoryLowered = courseData.category.name.toLocaleLowerCase();

  const categoryIcon = categoryLowered.replace(" ", "-");

  return (
    <div
      className={`featured-course-wrapper ${coursePage ? "personal-page" : ""}`}
    >
      <div className={`featured-course ${removeDescription ? "browse" : ""}`}>
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
              <CourseRating avgRating={rating} />
              <CategoryBox
                category={courseData.category.name}
                image={`images/categories/${categoryIcon}.png`}
              />
            </div>
          </div>
        ) : (
          <LecturerRatingAndHeading
            avgRating={courseData.avgRating}
            lecturer={courseData.instructor.name}
            heading={courseData.title}
          />
        )}
        <div className="heading-and-description">
          {coursePage && (
            <div className="instrucotr-and-heading">
              <CategoryBox
                category={courseData.instructor.name}
                image={courseData.instructor.avatar}
              />
              <h4>Course Description</h4>
            </div>
          )}
          {removeDescription ? (
            <Category
              category={courseData.category.name}
              id={courseData.category.id}
              icon={courseData.category.icon}
            />
          ) : (
            <p>{courseData.description}</p>
          )}
        </div>
        {!coursePage && (
          <div className="price-and-button">
            <p>
              starting from{" "}
              <span className="price">{courseData.basePrice}</span>
            </p>
            <Link to={`/${String(courseData.id)}`}>Details</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCourse;
