import React, { useEffect, useMemo, useState } from "react";

import { useParams } from "react-router";

import axios from "axios";

import BrowseHeading from "./BrowseHeading/BrowseHeading";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import FeaturedCourse from "../Landing/FeaturedCourses/FeaturedCourse/FeaturedCourse";

import type { PaginationMeta, SelectedFilterType } from "./Browse.types";
import type { FeaturedCourseTypes } from "../Landing/FeaturedCourses/FeaturedCourses.types";

import { BASE_URL } from "../../consts/consts";

import "./Browse.scss";
import type { SortKeys } from "./BrowseHeading/BrowseHeading.types";

const Browse: React.FC = () => {
  const [categoryValue, setCategoryValue] = useState<SelectedFilterType[]>();
  const [topicValue, setTopicValue] = useState<SelectedFilterType[]>();
  const [instructorValue, setInstructorValue] =
    useState<SelectedFilterType[]>();
  const [courses, setCourses] = useState<FeaturedCourseTypes[]>();

  const [paginationData, setPaginationData] = useState<PaginationMeta>();
  const [sortBy, setSortBy] = useState<SortKeys>("newest");

  const selectIds = (
    selectedCategories: SelectedFilterType[] | undefined,
  ): number[] => {
    return selectedCategories?.map((category) => category.id) ?? [];
  };

  const { page } = useParams();

  const categories = useMemo(() => selectIds(categoryValue), [categoryValue]);
  const topics = useMemo(() => selectIds(topicValue), [topicValue]);
  const instructors = useMemo(
    () => selectIds(instructorValue),
    [instructorValue],
  );

  useEffect(() => {
    async function handleCoursesFetch() {
      try {
        const response = await axios.get(
          `${BASE_URL}/courses?sort=${sortBy}&page=${page}`,
          {
            params: {
              categories,
              topics,
              instructors,
            },
          },
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
  }, [sortBy, page, categories, instructors, topics]);

  const handleClearFilters = () => {
    setCategoryValue([]);
    setTopicValue([]);
    setInstructorValue([]);
  };

  return (
    <main className="browse-main">
      <BrowseHeading
        handleClearFilters={handleClearFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
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
