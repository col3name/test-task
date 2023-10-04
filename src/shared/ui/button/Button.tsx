import React from "react";

interface ButtonProps {
  onClick: () => void,
  src: string,
  alt: string,
}

const Button: React.FC<ButtonProps>= ({
  onClick,
  src,
  alt,
}) => {
  return (
    <button
      className="list-item-col2__btn"
      onClick={ onClick }
    >
      <img src={src} alt={ alt } />
    </button>
  )
};

export default Button;
