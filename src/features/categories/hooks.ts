import {useAppDispatch, useAppSelector} from "../../app/hooks";

import {categoriesAdded, categoriesRemoved, categoriesUpdated} from "./slice";
import {tasksClearedCategories} from "../tasks/slice";
import {selectAllCategories} from "./selector";

export const useRemoveCategory = () => {
  const dispatch = useAppDispatch();
  const removeCategory = (categoryId: string) => {
    dispatch(categoriesRemoved(categoryId));
    dispatch(tasksClearedCategories(categoryId));
  }
  return { removeCategory };
}
export const useCreateCategory = () => {
  const dispatch = useAppDispatch();
  const createCategory = (name: string, description: string) => {
    dispatch(categoriesAdded({ name, description }));
  }
  return { createCategory};
}
export const useEditCategory = () => {
  const dispatch = useAppDispatch();
  const editCategory = (id: string, name: string, description: string) => {
    dispatch(categoriesUpdated({id, name, description}));
  }
  return { editCategory };
}
export const useAllCategoriesSelector = () => useAppSelector(selectAllCategories);