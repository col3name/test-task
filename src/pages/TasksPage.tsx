/* VENDOR */
import React from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import {TaskListItem} from "../widgets/tasks/TaskItem";
import { selectAllTasks } from "../features/tasks/slice";

export const TasksPage: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
