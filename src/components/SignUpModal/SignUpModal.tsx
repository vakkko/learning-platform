import React, { useState } from "react";

import ProgressSteps from "./ProgressSteps/ProgressSteps";

import SignUpForm from "./SignUpForm/SignUpForm.tsx";

import type { SignUpModalProps } from "./SignUpModal.types";

import "./SignUpModal.scss";

const SignUpModal: React.FC<SignUpModalProps> = ({ handleSignUpClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="modal">
      <button onClick={handleSignUpClose} className="btn-close">
        <img src="images/x.png" alt="cancel" />
      </button>
      <div className="modal-content">
        <h3>Create Account</h3>
        <p>Join and start learning today</p>
        <ProgressSteps currentStep={currentStep} />
        <SignUpForm
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleSignUpClose={handleSignUpClose}
        />
        <div className="text-in-lines">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <div className="auth-footer">
          <p>Already have an account? </p>{" "}
          <button className="btn-login">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
