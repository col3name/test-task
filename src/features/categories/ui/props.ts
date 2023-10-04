import {CategoryState} from "../slice";

export interface CategoryCardProps {
  item: CategoryState
}
export interface CategoryActionsProps {
  onEdit: () => void,
  onRemove: () => void,
}
export interface CategoryDescriptionProps {
  text: string
}