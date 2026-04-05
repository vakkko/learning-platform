import React from "react";

import type { InputFieldProps } from "./InputField.types";

import "./InputField.scss";

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  placeholder,
  iconSrc,
}) => {
  return (
    <div className="input-box">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} value={value} placeholder={placeholder} />
      <img className="input-icon" src={iconSrc} alt="icon" />
    </div>
  );
};

export default InputField;
