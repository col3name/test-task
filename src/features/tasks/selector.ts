import {RootState} from "../../app/store";
import {CategoryState} from "../categories/slice";

export const selectAllTasks = (state: RootState) => state.tasks;
export const findCategoryById = (categories: CategoryState[], id: string) => categories.find((it) => it.id === id)?.name;
