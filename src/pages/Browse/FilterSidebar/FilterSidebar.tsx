import React from "react";

import { useNavigate } from "react-router";

import Categories from "./Categories/Categories";
import Instructors from "./Instructors/Instructors";
import Topics from "./Topics/Topics";

import type { FilterSidebarProps } from "./FilterSidebar.types";
import type { SelectedFilterType } from "../Browse.types";

import "./FilterSidebar.scss";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categoryValue,
  setCategoryValue,
  topicValue,
  setTopicValue,
  instructorValue,
  setInstructorValue,
}) => {
  const navigate = useNavigate();

  const handleChange = (
    e: React.MouseEvent<HTMLDivElement>,
    setId: React.Dispatch<
      React.SetStateAction<SelectedFilterType[] | undefined>
    >,
  ) => {
    const target = (e.target as HTMLElement).closest("button");

    if (target && setId) {
      const id = Number(target.dataset.id);
      const categoryName = target.dataset.category;

      if (id && categoryName) {
        setId((prev) => {
          const currentSelection = prev || [];

          const isExisting = currentSelection.some((item) => item.id === id);

          if (isExisting) {
            return currentSelection.filter((item) => item.id !== id);
          } else {
            return [...currentSelection, { id, value: categoryName }];
          }
        });
      }
      navigate("/browse/1");
    }
  };

  const filtersCount =
    (categoryValue?.length ?? 0) +
    (topicValue?.length ?? 0) +
    (instructorValue?.length ?? 0);

  return (
    <div className="filter-sidebar">
      <Categories
        categoryValue={categoryValue}
        handleChange={handleChange}
        setCategoryValue={setCategoryValue}
      />
      <Topics
        topicValue={topicValue}
        handleChange={handleChange}
        setTopicValue={setTopicValue}
      />
      <Instructors
        handleChange={handleChange}
        instructorValue={instructorValue}
        setInstructorValue={setInstructorValue}
      />
      <div className="active-filters">
        <span>{filtersCount} Filter Active</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
