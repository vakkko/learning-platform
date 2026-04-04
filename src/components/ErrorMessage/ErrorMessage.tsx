import React from "react";

import type { ErrorMessageProps } from "./ErrorMessage.types";

import "./ErrorMessage.scss";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <>
      {error.map((err, i) => (
        <p className="error-message" key={i}>
          {err}
        </p>
      ))}
    </>
  );
};

export default ErrorMessage;
