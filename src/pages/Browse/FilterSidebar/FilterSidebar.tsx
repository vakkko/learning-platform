import React from "react";

import Categories from "./Categories/Categories";
import Instructors from "./Instructors/Instructors";
import Topics from "./Topics/Topics";

import type { FilterSidebarProps } from "./FilterSidebar.types";

import "./FilterSidebar.scss";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categoryId,
  setCategoryId,
  topicId,
  setTopicId,
}) => {
  const handleChange = (
    e: React.MouseEvent<HTMLDivElement>,
    setId: React.Dispatch<React.SetStateAction<number | undefined>>,
  ) => {
    const target = e.target as HTMLButtonElement;
    if (target.value && setId) setId(Number(target.value));
  };

  return (
    <div className="filter-sidebar">
      <Categories
        categoryId={categoryId}
        handleChange={handleChange}
        setCategoryId={setCategoryId}
      />
      <Topics
        topicId={topicId}
        handleChange={handleChange}
        setTopicId={setTopicId}
      />
      <Instructors />
      <div className="active-filters">
        <span>0 Filter Active</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
