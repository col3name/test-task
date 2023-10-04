import {TaskState} from "../model";
import {CategoryId} from "../../categories/model";

export interface TaskDescriptionProps {
  text: string
}
export interface TaskCardProps {
  item: TaskState
}

export interface TaskTitleProps {
  text: string
}

export interface TaskCategoryProps {
  category: CategoryId,
}