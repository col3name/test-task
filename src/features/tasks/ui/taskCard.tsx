import React from "react";

import TaskDescription from "./taskDescription";
import TaskTitle from "./TaskTitle";
import TaskCategory from "./taskCategory";
import {TaskCardProps} from "./props";

const TaskCard: React.FC<TaskCardProps> = ({
  item
}) => {
  return <div className="list-item-col1">
    <div className="list-item-col1-row1">
      <TaskTitle text={ item.name }/>
      <TaskCategory category={ item.category } />
    </div>
    <TaskDescription text={ item.description }/>
  </div>;
};
export default TaskCard;