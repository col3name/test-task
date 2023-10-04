import {useAppDispatch, useAppSelector} from "../../app/hooks";

import { tasksAdded, tasksRemoved, tasksUpdated} from "./slice";
import {selectAllTasks} from "./selector";

export const useRemoveTask = () => {
  const dispatch = useAppDispatch();
  const removeTask = (taskId: string) => dispatch(tasksRemoved(taskId));

  return {
    removeTask,
  }
};

export const useUpdateTask = () => {
  const dispatch = useAppDispatch();
  const updateTask = (id: string, name: string, description: string, category: string) =>  dispatch(tasksUpdated({
    id,
    name,
    description,
    category,
  }));

  return { updateTask };
}

export const useAddTask = () => {
  const dispatch = useAppDispatch();
  const addTask = (name: string, description: string, category: string) => dispatch(tasksAdded({
    name,
    description,
    category,
  }));

  return { addTask };
}

export const useAllTaskSelector = () => useAppSelector(selectAllTasks);
