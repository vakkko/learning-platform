import React from "react";

import Categories from "./Categories/Categories";

import Topics from "./Topics/Topics";

import "./FilterSidebar.scss";

const FilterSidebar: React.FC = () => {
  return (
    <div className="filter-sidebar">
      <Categories />
      <Topics />
    </div>
  );
};

export default FilterSidebar;
