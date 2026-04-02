import React from "react";

import type { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({
  purpleBackground,
  text,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`btn ${purpleBackground ? "btn-purple" : "btn-white"}`}
    >
      {text}
    </button>
  );
};

export default Button;
