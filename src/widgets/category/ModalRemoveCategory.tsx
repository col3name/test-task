/* VENDOR */
import React from "react";

/* APPLICATION */
import { CategoryState} from "../../features/categories/slice";
import {Modal} from "../../shared/ui/modal/Modal";
import {ModalHeader} from "../../shared/ui/modal/ModalHeader";
import {ModalText} from "../../shared/ui/modal/ModalText";
import {ModalFooter} from "../../shared/ui/modal/ModalFooter";
import {useRemoveCategory} from "../../features/categories/hooks";

interface ModalRemoveItemProps {
  item: CategoryState;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveCategory: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const {removeCategory} = useRemoveCategory();
  const text = `Вы уверены, что хотите удалить категорию "${item.name}"?`;

  const onSubmit = () => {
    removeCategory(item.id);
  }
  return (
    <Modal active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={ onSubmit }
      />
    </Modal>
  );
};
