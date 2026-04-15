import React, { useState } from "react";

import "./BrowseHeading.scss";
import type { BrowseHeadingProps, SortKeys } from "./BrowseHeading.types";
import { SHOW_SORT_BY } from "../../../consts/consts";

const BrowseHeading: React.FC<BrowseHeadingProps> = ({
  sortBy,
  setSortBy,
  handleClearFilters,
  paginationData,
}) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  if (!paginationData) return;

  const handleSortByClick = () => {
    setShowFilters((prev) => !prev);
  };

  const handleFilterListClick = (filterItem: SortKeys) => {
    setSortBy(filterItem);
    handleSortByClick();
  };

  const myKey: SortKeys = sortBy;
  const label = SHOW_SORT_BY[myKey];

  const { currentPage, lastPage, perPage, total } = paginationData;

  const numberOfCoursePerPage =
    currentPage === lastPage ? total : currentPage * perPage;

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
        <span className="pathname">Browse</span>
      </div>
      <div className="filter-box">
        <div>
          <h2>Filters</h2>
          <button onClick={handleClearFilters}>
            Clear All Filters
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 5.75L0.75 0.75M5.75 5.75L10.75 10.75M5.75 5.75L10.75 0.75M5.75 5.75L0.75 10.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p>
            Showing {numberOfCoursePerPage} out of {total}
          </p>
        </div>

        <div className="sort-container">
          <button className="btn-sortBy" onClick={handleSortByClick}>
            Sort By:
            <span className="sort-value">{label}</span>
            <img src="/images/input/down-arrow.png" alt="down arrow" />
          </button>
          {showFilters && (
            <ul className="filter-options-list">
              <li onClick={() => handleFilterListClick("newest")}>
                Newest First
              </li>
              <li onClick={() => handleFilterListClick("price_asc")}>
                Price: Low to High
              </li>
              <li onClick={() => handleFilterListClick("price_desc")}>
                Price: High to Low
              </li>
              <li onClick={() => handleFilterListClick("popular")}>
                Most Popular
              </li>
              <li onClick={() => handleFilterListClick("title_asc")}>
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
