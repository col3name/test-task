import {useAppDispatch, useAppSelector} from "../../app/hooks";

import {categoriesAdded, categoriesRemoved, categoriesUpdated} from "./slice";
import {tasksClearedCategories} from "../tasks/slice";
import {selectAllCategories} from "./selector";
import {CategoryId} from "./model";

export const useRemoveCategory = () => {
  const dispatch = useAppDispatch();
  const removeCategory = (categoryId: CategoryId) => {
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
  const editCategory = (id: CategoryId, name: string, description: string) => {
    dispatch(categoriesUpdated({id, name, description}));
  }
  return { editCategory };
}
export const useAllCategoriesSelector = () => useAppSelector(selectAllCategories);