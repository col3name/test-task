import {useAppDispatch, useAppSelector} from "../../app/hooks";

import {tasksAdded, tasksRemoved, tasksUpdated} from "./slice";
import {selectAllTasks} from "./selector";
import {TaskId} from "./model";
import {CategoryId} from "../categories/model";

export const useRemoveTask = () => {
  const dispatch = useAppDispatch();
  const removeTask = (taskId: TaskId) => dispatch(tasksRemoved(taskId));

  return {
    removeTask,
  }
};

export const useUpdateTask = () => {
  const dispatch = useAppDispatch();
  const updateTask = (id: TaskId, name: string, description: string, category: CategoryId) =>  dispatch(tasksUpdated({
    id,
    name,
    description,
    category,
  }));

  return { updateTask };
}

export const useAddTask = () => {
  const dispatch = useAppDispatch();
  const addTask = (name: string, description: string, category: CategoryId) => dispatch(tasksAdded({
    name,
    description,
    category,
  }));

  return { addTask };
}

export const useAllTaskSelector = () => useAppSelector(selectAllTasks);
