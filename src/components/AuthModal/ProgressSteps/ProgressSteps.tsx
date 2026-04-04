import React from "react";

import type { ProgressStepsProps } from "./ProgressSteps.types";

import "./ProgressSteps.scss";

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <div className="progress-steps-container">
      <div className={`${currentStep === 1 ? "pending" : "completed"}`}></div>
      <div
        className={
          currentStep === 2 ? "pending" : currentStep === 3 ? "completed" : ""
        }
      ></div>
      <div className={currentStep === 3 ? "pending" : ""}></div>
    </div>
  );
};

export default ProgressSteps;
