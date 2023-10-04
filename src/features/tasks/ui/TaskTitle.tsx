import React from "react";

import {TaskTitleProps} from "./props";

const TaskTitle: React.FC<TaskTitleProps> = ({
  text
}) => {
  return <h3 className="list-item-col1-row1__title">{text}</h3>;
}
export default TaskTitle;