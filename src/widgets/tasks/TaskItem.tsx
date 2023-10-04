/* VENDOR */
import React, {useState} from "react";

/* APPLICATION */
import editIcon from "../../shared/icons/edit.svg";
import removeIcon from "../../shared/icons/remove.svg";
import Button from "../../shared/ui/button/Button";
import {ModalEditTask} from "./ModelEditTask";

import TaskCard from "../../features/tasks/ui/taskCard";
import { ModalRemoveTask } from "./ModalRemoveTask";
import {TaskState} from "../../features/tasks/model";

interface TaskActionsProps {
  onEdit: () => void,
  onRemove: () => void,
}
const TaskActions: React.FC<TaskActionsProps> = ({
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

interface TaskListItemProps {
  item: TaskState;
}
export const TaskListItem: React.FC<TaskListItemProps> = ({item}) => {
  const [editModalActive, setEditModalActive] = useState<boolean>(false)
  const [removeModalActive, setRemoveModalActive] = useState<boolean>(false);

  const onEdit = () => {
    setEditModalActive(true);
  };
  const onRemove = () => {
    setRemoveModalActive(false);
  }

  return (
    <>
      <li className="list-item">
        <TaskCard item={ item }/>
        <TaskActions onEdit={onEdit} onRemove={onRemove}/>
        <ModalEditTask
          item={item}
          active={editModalActive}
          setActive={setEditModalActive}
        />
        <ModalRemoveTask
          item={item}
          active={removeModalActive}
          setActive={setRemoveModalActive}
        />
      </li>
    </>
  );
};
