import React from "react";

import type { ErrorMessageProps } from "./ErrorMessage.types";

import "./ErrorMessage.scss";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <p className="error-message">{error}</p>;
};

export default ErrorMessage;
