import React from "react";

import CategoryDescription from "./categoryDescription";
import CategoryTitle from "./categoryTitle";

import {CategoryCardProps} from "./props";

const CategoryCard: React.FC<CategoryCardProps> = ({
  item
}) => {
  return <div className="list-item-col1">
    <div className="list-item-col1-row1">
      <CategoryTitle text={ item.name }/>
    </div>
    <CategoryDescription text={ item.description }/>
  </div>;
};
export default CategoryCard;