import React from "react";
import {useSelector} from "react-redux";

import {findCategoryById, selectAllCategories} from "../../categories/slice";
import {TaskCategoryProps} from "./props";

const TaskCategory: React.FC<TaskCategoryProps> = ({
  category
}) => {
  const categories = useSelector(selectAllCategories)
  const name = findCategoryById(categories, category);
  return <span className="list-item-col1-row1__category">{ name }</span>;
}
export default TaskCategory;