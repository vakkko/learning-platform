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
  inputValue,
}) => {
  const registerProps = register && registerWith ? register(registerWith) : {};
  const validInput = !errors && (value || inputValue);

  return (
    <div
      className={`input-box ${errors ? "invalid" : validInput ? "valid" : ""}`}
    >
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

        <img
          className="input-icon"
          src={validInput ? " images/input/checkmark.png" : iconSrc}
          alt="icon"
        />
      </div>
      {errors && <ErrorMessage error={[errors]} />}
    </div>
  );
};

export default InputField;
