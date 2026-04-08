import React, { useEffect, useState } from "react";

import axios from "axios";

import FeaturedCourse from "./FeaturedCourse/FeaturedCourse";

import type { FullCourse } from "./FeaturedCourses.types";

import "./FeaturedCourses.scss";
import { BASE_URL } from "../../../consts/consts";

const FeaturedCourses: React.FC = () => {
  const [courses, setCourses] = useState<FullCourse[]>();

  useEffect(() => {
    async function getFeaturedCourses() {
      try {
        const response = await axios.get(`${BASE_URL}/courses/featured`);
        if (response.status === 200) setCourses(response.data.data);
      } catch (err) {
        console.error(err);
      }
    }
    getFeaturedCourses();
  }, []);

  return (
    <div className="featured-courses-container">
      <div className="featured-courses-heading">
        <h2>Start Learning Today</h2>
        <p>Choose from our most popular courses and begin your journey</p>
      </div>
      <div className="courses-row">
        {courses &&
          courses?.map((course) => <FeaturedCourse courseData={course} />)}
      </div>
    </div>
  );
};

export default FeaturedCourses;
