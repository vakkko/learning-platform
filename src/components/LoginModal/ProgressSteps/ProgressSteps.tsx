import React from "react";

import type { ProgressStepsProps } from "./ProgressSteps.types";

import "./ProgressSteps.scss";

const ProgressSteps: React.FC<ProgressStepsProps> = ({ step1 }) => {
  return (
    <div className="progress-steps-container">
      <div className={step1 ? "completed" : ""}></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ProgressSteps;
