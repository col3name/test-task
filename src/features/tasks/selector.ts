import {RootState} from "../../app/store";
import {CategoryId, CategoryState} from "../categories/model";

export const selectAllTasks = (state: RootState) => state.tasks;
export const findCategoryById = (categories: CategoryState[], id: CategoryId) => categories.find((it) => it.id === id)?.name;
