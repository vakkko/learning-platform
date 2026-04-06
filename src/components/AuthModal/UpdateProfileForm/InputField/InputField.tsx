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
}) => {
  return (
    <div className="input-box">
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          type="text"
          id={label}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(registerWith)}
        />
        <img className="input-icon" src={iconSrc} alt="icon" />
      </div>
      {errors && <ErrorMessage error={[errors]} />}
    </div>
  );
};

export default InputField;
