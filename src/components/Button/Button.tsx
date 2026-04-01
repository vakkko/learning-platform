import React from "react";

import type { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ purpleBackground, text }) => {
  return (
    <button className={purpleBackground ? "btn-purple" : "btn-white"}>
      {text}
    </button>
  );
};

export default Button;
