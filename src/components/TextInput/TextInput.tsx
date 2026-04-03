import React, { useState, memo } from "react";

import type { TextInputProps } from "./TextInput.types";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./TextInput.scss";

const TextInput: React.FC<{ inputObj: TextInputProps }> = ({
  inputObj: {
    label,
    type,
    autoComplete,
    placeholder,
    register,
    registerWith,
    error,
    eyeIcon,
  },
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const actualType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div className="input-box">
      <div>
        <label htmlFor={label}>{label}</label>
        <br />
        <input
          id={label}
          {...register(registerWith)}
          type={actualType}
          autoComplete={autoComplete}
          placeholder={placeholder}
        />
        {type === "password" && eyeIcon && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="btn-eye"
          >
            <img src={eyeIcon} alt="eye icon" />
          </button>
        )}
      </div>
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default memo(TextInput);
