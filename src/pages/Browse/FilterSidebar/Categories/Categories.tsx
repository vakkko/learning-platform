import React from "react";

import Category from "../Category/Category.tsx";

import useGetData from "../../../../hooks/useGetData/useGetData.tsx";

import type { CategoriesProps, CategoryTypes } from "./Categories.types.ts";

import "./Categories.scss";

const Categories: React.FC<CategoriesProps> = ({
  categoryValue,
  handleChange,
  setCategoryValue,
}) => {
  const { data: categories } = useGetData<CategoryTypes[]>({
    endpoint: "categories",
  });

  return (
    <div>
      <h4>Categories</h4>
      <div
        onClick={(e) => handleChange(e, setCategoryValue)}
        className="categories-filters"
      >
        {categories?.map((categor) => (
          <React.Fragment key={categor.id}>
            <Category
              id={categor.id}
              category={categor.name}
              icon={categor.icon}
              categoryId={categoryValue?.id}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Categories;
