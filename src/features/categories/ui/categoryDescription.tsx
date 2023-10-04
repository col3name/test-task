import React from "react";

import {CategoryDescriptionProps} from "./props";

const CategoryDescription: React.FC<CategoryDescriptionProps> = ({
  text
}) => {
  return <div className="list-item-col1-row2">{ text }</div>
};

export default CategoryDescription;