/* VENDOR */
import {useRemoveTask} from "../../features/tasks/hooks";

/* APPLICATION */
import React from "react";
import {Modal} from "../../shared/ui/modal/Modal";
import {ModalHeader} from "../../shared/ui/modal/ModalHeader";
import {ModalText} from "../../shared/ui/modal/ModalText";
import {ModalFooter} from "../../shared/ui/modal/ModalFooter";
import {TaskState} from "../../features/tasks/model";

interface ModalRemoveItemProps {
  item: TaskState;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveTask: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const { removeTask } = useRemoveTask();
  const text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;
  return (
    <Modal active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={ () => removeTask(item.id) }
      />
    </Modal>
  );
};