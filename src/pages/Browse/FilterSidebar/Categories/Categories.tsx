import React from "react";

import Category from "../Category/Category.tsx";

import useGetData from "../../../../hooks/useGetData/useGetData.tsx";

import "./Categories.scss";
import type { CategoryTypes } from "./Categories.types.ts";

const Categories: React.FC = () => {
  const { data: categories } = useGetData<CategoryTypes[]>({
    endpoint: "categories",
  });

  return (
    <div>
      <h4>Categories</h4>
      <div className="categories-filters">
        {categories?.map((categor) => (
          <React.Fragment key={categor.id}>
            <Category category={categor.name} icon={categor.icon} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Categories;
