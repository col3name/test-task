import React from "react";

import editIcon from "../../../shared/icons/edit.svg";
import removeIcon from "../../../shared/icons/remove.svg";
import Button from "../../../shared/ui/button/Button";

import {CategoryActionsProps} from "./props";

const CategoryActions: React.FC<CategoryActionsProps> = ({
  onEdit, onRemove
}) => {
  return <div className="list-item-col2">
    <Button
      onClick={onEdit}
      src={editIcon}
      alt="edit"
    />
    <Button
      onClick={onRemove}
      src={removeIcon}
      alt="remove"
    />
  </div>;
}

export default CategoryActions;