import React from "react";

import Categories from "./Categories/Categories";
import Instructors from "./Instructors/Instructors";
import Topics from "./Topics/Topics";

import type { FilterSidebarProps } from "./FilterSidebar.types";

import "./FilterSidebar.scss";
import type { SelectedFilterType } from "../Browse.types";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categoryValue,
  setCategoryValue,
  topicValue,
  setTopicValue,
  instructorValue,
  setInstructorValue,
}) => {
  const handleChange = (
    e: React.MouseEvent<HTMLDivElement>,
    setId: React.Dispatch<React.SetStateAction<SelectedFilterType | undefined>>,
  ) => {
    const target = (e.target as HTMLElement).closest("button");
    if (target && setId) {
      const id = target.dataset.id;
      const categoryName = target.dataset.category;

      if (id && categoryName) {
        setId({ id: Number(id), value: categoryName });
      }
    }
  };

  return (
    <div className="filter-sidebar">
      <Categories
        categoryValue={categoryValue}
        handleChange={handleChange}
        setCategoryValue={setCategoryValue}
      />
      <Topics
        topicId={topicValue?.id}
        handleChange={handleChange}
        setTopicValue={setTopicValue}
      />
      <Instructors
        handleChange={handleChange}
        instuctorId={instructorValue?.id}
        setInstructorValue={setInstructorValue}
      />
      <div className="active-filters">
        <span>0 Filter Active</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
