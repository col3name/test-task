import React from "react";

import {ModalBtn} from "./ModalBtn";
import {ModalBtnSize, ModalBtnType} from "./modal.props";

interface ModalFooterProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string;
  size?: ModalBtnSize;
  onSubmit: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  clearState,
  setActive,
  submitBtnText,
  size = ModalBtnSize.Default,
  onSubmit,
}) => {
  const onClose = () => {
    clearState && clearState();
    setActive(false);
  };
  return (
    <footer className="modal__content-footer">
      <ModalBtn type={ModalBtnType.Primary} size={size} onClick={onSubmit}>
        {submitBtnText}
      </ModalBtn>
      <ModalBtn
        onClick={onClose}
      >
        Закрыть
      </ModalBtn>
    </footer>
  );
};
