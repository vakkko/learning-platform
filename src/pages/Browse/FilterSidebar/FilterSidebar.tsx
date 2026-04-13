import React from "react";

import Categories from "./Categories/Categories";
import Instructors from "./Instructors/Instructors";
import Topics from "./Topics/Topics";

import type { FilterSidebarProps } from "./FilterSidebar.types";

import "./FilterSidebar.scss";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categoryId,
  setCategoryId,
}) => {
  const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.value && setCategoryId) setCategoryId(Number(target.value));
  };

  return (
    <div className="filter-sidebar">
      <Categories categoryId={categoryId} handleChange={handleChange} />
      <Topics />
      <Instructors />
      <div className="active-filters">
        <span>0 Filter Active</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
