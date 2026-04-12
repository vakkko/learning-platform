import React from "react";

import "./ProgressBox.scss";

import type { ProgressBoxProps } from "./ProgressBox.types";

const ProgressBox: React.FC<ProgressBoxProps> = ({ progressValue }) => {
  return (
    <div className="progress-box">
      <span>{progressValue}% Complete</span>
      <progress
        className="progress-bar"
        max={100}
        value={progressValue}
      ></progress>
    </div>
  );
};

export default ProgressBox;
