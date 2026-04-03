import React, { useState, memo, useEffect } from "react";

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
    error,
    watch,
    registerWith,
    eyeIcon,
  },
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const actualType = type === "password" && isPasswordVisible ? "text" : type;

  const avatar = watch && (watch("avatar") as unknown as FileList);

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!watch) return;

    const subscription = watch((value) => {
      const fileList = value[registerWith] as unknown as FileList;

      if (fileList && fileList.length > 0 && fileList[0] instanceof File) {
        const url = URL.createObjectURL(fileList[0]);

        setPreview((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return url;
        });
      } else {
        setPreview(null);
      }
    });

    return () => {
      subscription.unsubscribe();
      setPreview((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
    };
  }, [watch, registerWith]);

  return (
    <div className="input-box">
      <div>
        <label htmlFor={label}>{label}</label>
        <br />
        <div className={`${label}-container`}>
          <input
            id={label}
            {...register(registerWith)}
            type={actualType}
            autoComplete={autoComplete}
            placeholder={placeholder}
          />
          {type === "file" && (
            <div className="avatar-upload-container">
              <div>
                <img src="images/upload.png" alt="upload icon" />
                <p className="upload-files">
                  Drag and drop or <span>Upload file</span>
                </p>
                <p className="file-types">JPG, PNG or WebP</p>
              </div>
              {avatar && avatar.length > 0 && preview && (
                <div style={{ marginTop: "10px" }}>
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
