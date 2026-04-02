import React from "react";

import type { TextInputProps } from "./TextInput.types";

import "./TextInput.scss";

const TextInput: React.FC<{ inputObj: TextInputProps }> = ({
  inputObj: { label, type, autoComplete, placeholder, register, registerWith },
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
    </>
  );
};

export default TextInput;
