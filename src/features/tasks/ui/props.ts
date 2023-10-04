import {TaskState} from "../slice";

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
  category: string,
}