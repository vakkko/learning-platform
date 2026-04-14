import React, { useEffect, useState } from "react";

import axios from "axios";

import BrowseHeading from "./BrowseHeading/BrowseHeading";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

import type { PaginationMeta, SelectedFilterType } from "./Browse.types";
import type { FeaturedCourseTypes } from "../Landing/FeaturedCourses/FeaturedCourses.types";

import { BASE_URL } from "../../consts/consts";

import "./Browse.scss";
import FeaturedCourse from "../Landing/FeaturedCourses/FeaturedCourse/FeaturedCourse";

const Browse: React.FC = () => {
  const [categoryValue, setCategoryValue] = useState<SelectedFilterType[]>();
  const [topicValue, setTopicValue] = useState<SelectedFilterType[]>();
  const [instructorValue, setInstructorValue] =
    useState<SelectedFilterType[]>();

  const [courses, setCourses] = useState<FeaturedCourseTypes[]>();
  const [paginationData, setPaginationData] = useState<PaginationMeta>();

  useEffect(() => {
    async function handleCoursesFetch() {
      try {
        const response = await axios.get(
          `${BASE_URL}/courses?sort=newest&page=1`,
        );

        if (response.status === 200) {
          setCourses(response.data.data);
          setPaginationData(response.data.meta);
        }
      } catch (err) {
        console.error(err);
      }
    }
    handleCoursesFetch();
  }, []);

  return (
    <main className="browse-main">
      <BrowseHeading />
      <div className="sidebar-and-content">
        <FilterSidebar
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          topicValue={topicValue}
          setTopicValue={setTopicValue}
          instructorValue={instructorValue}
          setInstructorValue={setInstructorValue}
        />
        {courses && (
          <div className="courses-container">
            {courses.map((course) => (
              <React.Fragment key={course.id}>
                <FeaturedCourse removeDescription courseData={course} />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Browse;
