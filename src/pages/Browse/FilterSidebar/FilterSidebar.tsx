import React from "react";

import Categories from "./Categories/Categories";

import Topics from "./Topics/Topics";

import "./FilterSidebar.scss";
import Instructors from "./Instructors/Instructors";

const FilterSidebar: React.FC = () => {
  return (
    <div className="filter-sidebar">
      <Categories />
      <Topics />
      <Instructors />
      <div className="active-filters">
        <span>0 Filter Active</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
