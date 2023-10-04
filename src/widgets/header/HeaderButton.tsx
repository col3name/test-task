import React from "react";
import {HeaderButtonProps} from "./header.props";

const HeaderButton: React.FC<HeaderButtonProps> = ({
  text, onClick
}) => {
  return (
    <button
      className="header-button"
      onClick={ onClick}
    >
      { text }
    </button>
  );
};

export default HeaderButton;