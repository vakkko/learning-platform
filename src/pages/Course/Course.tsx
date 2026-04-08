import React from "react";

import { useLocation } from "react-router";

import FeaturedCourse from "../Landing/FeaturedCourses/FeaturedCourse/FeaturedCourse";

import "./Course.scss";

const Course: React.FC = () => {
  const location = useLocation();
  const { courseData } = location.state;

  return (
    <main className="course-main">
      <FeaturedCourse courseData={courseData} coursePage />
    </main>
  );
};

export default Course;
