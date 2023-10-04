import {useDispatch} from "react-redux";

import {categoriesAdded, categoriesRemoved, categoriesUpdated} from "./slice";
import {tasksClearedCategories} from "../tasks/slice";

export const useRemoveCategory = () => {
  const dispatch = useDispatch();
  const removeCategory = (categoryId: string) => {
    dispatch(categoriesRemoved(categoryId));
    dispatch(tasksClearedCategories(categoryId));
  }
  return { removeCategory };
}
export const useCreateCategory = () => {
  const dispatch = useDispatch();
  const createCategory = (name: string, description: string) => {
    dispatch(categoriesAdded({ name, description }));
  }
  return { createCategory};
}
export const useEditCategory = () => {
  const dispatch = useDispatch();
  const editCategory = (id: string, name: string, description: string) => {
    dispatch(categoriesUpdated({id, name, description}));
  }
  return { editCategory };
}