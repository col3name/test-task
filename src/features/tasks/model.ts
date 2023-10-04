import {CategoryId} from "../categories/model";

export type TaskId = string;
export interface TaskState {
  id: TaskId;
  name: string;
  description: string;
  category: CategoryId;
}
