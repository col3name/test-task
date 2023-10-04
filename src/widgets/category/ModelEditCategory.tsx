/* VENDOR */
import React, {useState} from "react";

/* APPLICATION */
import {Modal} from "../../shared/ui/modal/Modal";
import {ModalHeader} from "../../shared/ui/modal/ModalHeader";
import {ModalInput} from "../../shared/ui/modal/ModalInput";
import {ModalTextarea} from "../../shared/ui/modal/ModalTextarea";
import {ModalFooter} from "../../shared/ui/modal/ModalFooter";
import {CategoryState} from "../../features/categories/slice";

import {useEditCategory} from "../../features/categories/hooks";
import {ModalBtnSize} from "../../shared/ui/modal/modal.props";

interface ModalEditCategoryProps {
  item: CategoryState;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditCategory: React.FC<ModalEditCategoryProps> = ({
  item,
  active,
  setActive,
}) => {
  const { editCategory } = useEditCategory();
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const onSave = () => {
    return () => {
      editCategory(item.id, name, description);
      setActive(false);
    };
  }

  return (
    <Modal active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title="Редактирование категории"
      />
      <ModalInput name={name} setName={setName} size="large" />
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size={ModalBtnSize.Large}
        onSubmit={onSave()}
      />
    </Modal>
  );
};
