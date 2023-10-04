import {useDispatch} from "react-redux";

import {tasksAdded, tasksRemoved, tasksUpdated} from "./slice";

export const useRemoveTask = () => {
  const dispatch = useDispatch();
  const removeTask = (taskId: string) => dispatch(tasksRemoved(taskId));

  return {
    removeTask,
  }
};

export const useUpdateTask = () => {
  const dispatch = useDispatch();
  const updateTask = (id: string, name: string, description: string, category: string) =>  dispatch(tasksUpdated({
    id,
    name,
    description,
    category,
  }));

  return { updateTask };
}

export const useAddTask = () => {
  const dispatch = useDispatch();
  const addTask = (name: string, description: string, category: string) => dispatch(tasksAdded({
    name,
    description,
    category,
  }));

  return { addTask };
}
