import React from "react";

import {TaskCategoryProps} from "./props";
import {findCategoryById} from "../selector";
import {useAllCategoriesSelector} from "../../categories/hooks";

const TaskCategory: React.FC<TaskCategoryProps> = ({
  category
}) => {
  const categories = useAllCategoriesSelector()
  const name = findCategoryById(categories, category);
  return <span className="list-item-col1-row1__category">{ name }</span>;
}
export default TaskCategory;