import React, { useState } from "react";

import BrowseHeading from "./BrowseHeading/BrowseHeading";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

import "./Browse.scss";

const Browse: React.FC = () => {
  const [categoryId, setCategoryId] = useState<number>();

  return (
    <main className="browse-main">
      <BrowseHeading />
      <div>
        <FilterSidebar categoryId={categoryId} setCategoryId={setCategoryId} />
      </div>
    </main>
  );
};

export default Browse;
