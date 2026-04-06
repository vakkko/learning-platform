import React from "react";

import type { InputFieldProps } from "./InputField.types";

import "./InputField.scss";
import ErrorMessage from "../../../ErrorMessage/ErrorMessage";

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  placeholder,
  iconSrc,
  registerWith,
  register,
  autoComplete,
  errors,
  disabled,
}) => {
  const registerProps = register && registerWith ? register(registerWith) : {};

  return (
    <div className={`input-box ${errors ? "invalid-input" : ""}`}>
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          type="text"
          id={label}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...registerProps}
          disabled={disabled}
        />
        <img className="input-icon" src={iconSrc} alt="icon" />
      </div>
      {errors && <ErrorMessage error={[errors]} />}
    </div>
  );
};

export default InputField;
