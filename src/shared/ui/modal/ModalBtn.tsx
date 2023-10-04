import React from "react";

import "./ModalBtn.css";
import {ModalBtnSize, ModalBtnType} from "./modal.props";

interface ModalBtnProps {
  type?: ModalBtnType;
  size?: ModalBtnSize;
  children: React.ReactNode;
  onClick: () => void;
}

export const ModalBtn: React.FC<ModalBtnProps> = ({
  type = ModalBtnType.Default,
  children,
  size= ModalBtnSize.Default,
  onClick,
}) => {
  const btnClass = `modalbtn ${type === ModalBtnType.Primary && "primary" } ${size === ModalBtnSize.Large && "large" }`
  return (
    <button className={ btnClass } onClick={onClick}>
      {children}
    </button>
  );
};
