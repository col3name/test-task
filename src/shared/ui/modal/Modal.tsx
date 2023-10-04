/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.css";
import Portal from "../portal/portal";

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: React.FC<ModalProps> = ({
  clearState,
  active,
  setActive,
  children,
}) => {
  return (
    <Portal>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
