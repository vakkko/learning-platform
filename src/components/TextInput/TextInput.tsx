import React from "react";

import type { TextInputProps } from "./TextInput.types";

import "./TextInput.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const TextInput: React.FC<{ inputObj: TextInputProps }> = ({
  inputObj: {
    label,
    type,
    autoComplete,
    placeholder,
    register,
    registerWith,
    error,
  },
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <br />
      <input
        id={label}
        {...register(registerWith)}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default TextInput;
