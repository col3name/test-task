/* VENDOR */
import React, { useState } from "react";

/* APPLICATION */
import {Modal} from "../../shared/ui/modal/Modal";
import {ModalHeader} from "../../shared/ui/modal/ModalHeader";
import {ModalInput} from "../../shared/ui/modal/ModalInput";
import {ModalTextarea} from "../../shared/ui/modal/ModalTextarea";
import {ModalFooter} from "../../shared/ui/modal/ModalFooter";
import {useCreateCategory} from "../../features/categories/hooks";
import {ModalBtnSize} from "../../shared/ui/modal/modal.props";

interface ModalCreateCategoryProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreateCategory: React.FC<ModalCreateCategoryProps> = ({
  active,
  setActive,
}) => {
  const { createCategory } = useCreateCategory();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const clearState = () => {
    setName("");
    setDescription("");
  }

  const onCreate = () => {
    if (!name) {
      return;
    }
    createCategory(name, description)
    clearState();
    setActive(false);
  }
  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title="Создание категории"
      />
      <ModalInput name={name} setName={setName} size="large" />
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        clearState={clearState}
        submitBtnText="Создать"
        size={ ModalBtnSize.Large }
        onSubmit={ onCreate }
      />
    </Modal>
  );
};

export default ModalCreateCategory;