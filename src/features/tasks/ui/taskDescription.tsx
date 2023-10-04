import React from "react";

import {TaskDescriptionProps} from "./props";

const TaskDescription: React.FC<TaskDescriptionProps> = ({
  text
}) => {
  return <div className="list-item-col1-row2">{ text }</div>
};
export default TaskDescription;