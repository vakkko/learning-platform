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
  getFieldState,
}) => {
  const registerProps = register && registerWith ? register(registerWith) : {};

  const fieldState =
    registerWith && getFieldState && getFieldState(registerWith);
  const isDirty = fieldState?.isDirty;
  const inValid = fieldState?.invalid;
  const inputValue = isDirty && !inValid;
  const validInput = !errors && (value || inputValue);

  console.log(validInput);

  return (
    <div className={`input-box `}>
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
          className={`${errors ? "invalid" : validInput ? "valid" : ""}`}
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
