import React from "react";

import "./Browse.scss";
import BrowseHeading from "./BrowseHeading/BrowseHeading";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

const Browse: React.FC = () => {
  return (
    <main className="browse-main">
      <BrowseHeading />
      <div>
        <FilterSidebar />
      </div>
    </main>
  );
};

export default Browse;
