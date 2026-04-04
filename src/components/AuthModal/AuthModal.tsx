import React, { useState } from "react";

import ProgressSteps from "./ProgressSteps/ProgressSteps.tsx";

import SignUpForm from "./SignUpForm/SignUpForm.tsx";

import type { AuthModalProps } from "./AuthModal.types.ts";

import "./AuthModal.scss";

const AuthModal: React.FC<AuthModalProps> = ({
  handleModalClose,
  loginStep,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="modal">
      <button onClick={handleModalClose} className="btn-close">
        <img src="images/x.png" alt="cancel" />
      </button>
      <div className="modal-content">
        {loginStep ? (
          <>
            <h3>Welcome Back</h3>
            <p>Log in to continue your learning</p>
          </>
        ) : (
          <>
            <h3>Create Account</h3>
            <p>Join and start learning today</p>
          </>
        )}
        {!loginStep && <ProgressSteps currentStep={currentStep} />}
        <SignUpForm
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleModalClose={handleModalClose}
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

export default AuthModal;
