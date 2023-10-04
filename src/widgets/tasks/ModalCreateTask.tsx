/* VENDOR */
import React, {useState} from "react";

/* APPLICATION */
import {Modal} from "../../shared/ui/modal/Modal";
import {ModalHeader} from "../../shared/ui/modal/ModalHeader";
import {ModalRow} from "../../shared/ui/modal/ModalRow";
import {ModalTextarea} from "../../shared/ui/modal/ModalTextarea";
import {ModalFooter} from "../../shared/ui/modal/ModalFooter";

import {useAddTask} from "../../features/tasks/hooks";
import {ModalBtnSize} from "../../shared/ui/modal/modal.props";


interface ModalCreateTaskProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreateTask: React.FC<ModalCreateTaskProps> = ({
  active,
  setActive,
}) => {
  const { addTask } = useAddTask()
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");
  const [description, setDescription] = useState("");

  const clearState = () => {
    setName("");
    setDescription("");
    setSelected("");
  }

  const onSubmit = () => {
    if (!name) {
      return;
    }
    addTask(name, description, selected);
    clearState();
    setActive(false);
  };
  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title="Создание задачи"
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
        clearState={clearState}
        submitBtnText="Создать"
        size={ModalBtnSize.Large}
        onSubmit={ onSubmit }
      />
    </Modal>
  );
};

export default ModalCreateTask;