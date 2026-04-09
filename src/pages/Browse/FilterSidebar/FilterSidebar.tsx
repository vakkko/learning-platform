import React from "react";

import Categories from "./Categories/Categories";

import "./FilterSidebar.scss";

const FilterSidebar: React.FC = () => {
  return (
    <div className="filter-sidebar">
      <Categories />
    </div>
  );
};

export default FilterSidebar;
