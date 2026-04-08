import React from "react";

import type { CategoryBoxProps } from "./CategoryBox.types";

import "./CategoryBox.scss";

const CategoryBox: React.FC<CategoryBoxProps> = ({ category, image }) => {
  return (
    <div className="category-box">
      <img src={image} alt="closing tag" />
      <span>{category}</span>
    </div>
  );
};

export default CategoryBox;
