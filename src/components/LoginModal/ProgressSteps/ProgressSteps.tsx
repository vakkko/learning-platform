import React from "react";

import type { ProgressStepsProps } from "./ProgressSteps.types";

import "./ProgressSteps.scss";

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <div className="progress-steps-container">
      <div
        className={`${currentStep === 1 ? "pending" : currentStep === 2 ? "completed" : ""}`}
      ></div>
      <div className={currentStep === 2 ? "pending" : ""}></div>
      <div></div>
    </div>
  );
};

export default ProgressSteps;
