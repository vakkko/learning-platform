import React from "react";
import { Link } from "react-router";
import type { PaginationProps } from "./Pagination.types";
import "./Pagination.scss";

const Pagination: React.FC<PaginationProps> = ({ paginationData }) => {
  if (!paginationData) return null;

  const { currentPage, lastPage } = paginationData;

  const showLeftDots = currentPage > 3;
  const showRightDots = currentPage < lastPage - 2;

  return (
    <div className="pagination-container">
      <Link
        to={`/browse/${currentPage === 1 ? 1 : currentPage - 1}`}
        className={`pagination-arrow ${currentPage === 1 ? "disabled" : ""}`}
      >
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
          <path
            d="M5.30131 0.000709453L6.32404 1.01207L2.77291 4.56321L11.6934 4.56321L11.6934 6.04048L2.77291 6.04048L6.32404 9.58594L5.30131 10.603L0.000178512 5.30185L5.30131 0.000709453Z"
            fill="currentColor"
          />
        </svg>
      </Link>

      <Link
        to="/browse/1"
        className={`page-item ${currentPage === 1 ? "active" : ""}`}
      >
        1
      </Link>

      {showLeftDots && <a>...</a>}

      {[currentPage - 1, currentPage, currentPage + 1].map((page) => {
        if (page > 1 && page < lastPage) {
          return (
            <Link
              key={page}
              to={`/browse/${page}`}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              {page}
            </Link>
          );
        }
        return null;
      })}

      {showRightDots && <a className="pagination-dots">...</a>}

      {lastPage > 1 && (
        <Link
          to={`/browse/${lastPage}`}
          className={`page-item ${currentPage === lastPage ? "active" : ""}`}
        >
          {lastPage}
        </Link>
      )}

      <Link
        to={`/browse/${currentPage === lastPage ? lastPage : currentPage + 1}`}
        className={`pagination-arrow ${currentPage === lastPage ? "disabled" : ""}`}
      >
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
          <path
            d="M6.39205 10.6028L5.36932 9.59144L8.92045 6.04031H0V4.56303H8.92045L5.36932 1.01758L6.39205 0.00053215L11.6932 5.30167L6.39205 10.6028Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Pagination;
