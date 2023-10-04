/* VENDOR */
import React from "react";

/* APPLICATION */
import {TaskListItem} from "../widgets/tasks/TaskItem";
import {useAllTaskSelector} from "../features/tasks/hooks";

export const TasksPage: React.FC = () => {
  const tasks = useAllTaskSelector();

  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
