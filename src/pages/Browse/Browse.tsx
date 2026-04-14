import React, { useState } from "react";

import BrowseHeading from "./BrowseHeading/BrowseHeading";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

import "./Browse.scss";
import type { SelectedFilterType } from "./Browse.types";

const Browse: React.FC = () => {
  const [categoryValue, setCategoryValue] = useState<SelectedFilterType>();
  const [topicValue, setTopicValue] = useState<SelectedFilterType>();

  return (
    <main className="browse-main">
      <BrowseHeading />
      <div>
        <FilterSidebar
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          topicValue={topicValue}
          setTopicValue={setTopicValue}
        />
      </div>
    </main>
  );
};

export default Browse;
