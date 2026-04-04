import React, { useState, memo } from "react";

import type { TextInputProps } from "./TextInput.types";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./TextInput.scss";
import UploadBox from "./UploadBox/UploadBox";

const TextInput: React.FC<{ inputObj: TextInputProps }> = ({
  inputObj: {
    label,
    type,
    autoComplete,
    placeholder,
    register,
    error,
    registerWith,
    eyeIcon,
    accept,
  },
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const actualType = type === "password" && isPasswordVisible ? "text" : type;

  const [preview, setPreview] = useState<string | null>(null);

  const { onChange, ...registerFields } = register(registerWith);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (preview) URL.revokeObjectURL(preview);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }

    onChange(e);
  };

  return (
    <div className="input-box">
      <div>
        <label htmlFor={label}>{label}</label>
        <br />
        <div className={`${label}-container`}>
          <input
            id={label}
            {...registerFields}
            type={actualType}
            autoComplete={autoComplete}
            placeholder={placeholder}
            onChange={type === "file" ? handleFileChange : onChange}
            accept={accept ? accept : ""}
          />
          {type === "file" && (
            <div className="avatar-upload-container">
              <UploadBox />
              {preview && (
                <div>
                  <img
                    src={preview}
                    alt="avatar"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
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
