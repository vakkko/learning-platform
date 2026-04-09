import React, { useState } from "react";

import { useLocation } from "react-router";

import "./BrowseHeading.scss";

const BrowseHeading: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filterBy, setFilterBy] = useState<string>("");

  const handleSortByClick = () => {
    setShowFilters((prev) => !prev);
  };

  const handleFilterListClick = (filterItem: string) => {
    setFilterBy(filterItem);
    handleSortByClick();
  };

  return (
    <div className="browse-heading-container">
      <div className="path-box">
        <span>Home</span>
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.000161171 1.0607L1.06084 0.000703812L6.83984 5.7777C6.93299 5.87027 7.00692 5.98035 7.05737 6.1016C7.10782 6.22285 7.13379 6.35288 7.13379 6.4842C7.13379 6.61553 7.10782 6.74556 7.05737 6.86681C7.00692 6.98806 6.93299 7.09813 6.83984 7.1907L1.06084 12.9707L0.000838757 11.9107L5.42484 6.4857L-0.000161171 1.0607Z"
            fill="#666666"
          />
        </svg>
        <span className="pathname">{pathname}</span>
      </div>
      <div className="filter-box">
        <div>
          <h2>Filters</h2>
        </div>

        <div className="sort-container">
          <button className="btn-sortBy" onClick={handleSortByClick}>
            Sort By:{" "}
            <span className="sort-value">
              {filterBy ? filterBy : "Newest First"}
            </span>
            <img src="images/input/down-arrow.png" alt="down arrow" />
          </button>
          {showFilters && (
            <ul className="filter-options-list">
              <li onClick={() => handleFilterListClick(" Newest First")}>
                Newest First
              </li>
              <li onClick={() => handleFilterListClick("Price: Low to High")}>
                Price: Low to High
              </li>
              <li onClick={() => handleFilterListClick("Price: High to Low")}>
                Price: High to Low
              </li>
              <li onClick={() => handleFilterListClick("Most Popular")}>
                Most Popular
              </li>
              <li onClick={() => handleFilterListClick("Title: A-Z")}>
                Title: A-Z
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseHeading;
