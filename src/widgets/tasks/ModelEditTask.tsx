/* VENDOR */
import React, {useState} from "react";

/* APPLICATION */
import {Modal} from "../../shared/ui/modal/Modal";
import {ModalHeader} from "../../shared/ui/modal/ModalHeader";
import {ModalRow} from "../../shared/ui/modal/ModalRow";
import {ModalTextarea} from "../../shared/ui/modal/ModalTextarea";
import {ModalFooter} from "../../shared/ui/modal/ModalFooter";
import {TaskState} from "../../features/tasks/slice";
import {useUpdateTask} from "../../features/tasks/hooks";
import {ModalBtnSize} from "../../shared/ui/modal/modal.props";

interface ModalEditTaskProps {
  item: TaskState;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditTask: React.FC<ModalEditTaskProps> = ({
  item,
  active,
  setActive,
}) => {
  const { updateTask } = useUpdateTask();
  const [name, setName] = useState(item.name);
  const [selected, setSelected] = useState(item.category || "");
  const [description, setDescription] = useState(item.description);

  const onUpdate = () => {
    updateTask(item.id, name, description, selected,)
    setActive(false);
  };
  return (
    <Modal active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title= "Редактирование задачи"
      />
      <ModalRow
        name={name}
        setName={setName}
        selected={selected}
        setSelected={setSelected}
      />
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size={ModalBtnSize.Large}
        onSubmit={onUpdate}
      />
    </Modal>
  );
};
