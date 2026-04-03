import React, { useState } from "react";

import ProgressSteps from "./ProgressSteps/ProgressSteps";

import type { LoginModalProps } from "./LoginModal.types";

import "./LoginModal.scss";
import LoginForm from "./LoginForm/LoginForm";

const LoginModal: React.FC<LoginModalProps> = ({ handleLoginClose }) => {
  const [emailStep, setEmailStep] = useState<boolean>(false);

  return (
    <div className="modal">
      <button onClick={handleLoginClose} className="btn-close">
        <img src="images/x.png" alt="cancel" />
      </button>
      <div className="modal-content">
        <h3>Create Account</h3>
        <p>Join and start learning today</p>
        <ProgressSteps step1={emailStep} />
        <LoginForm setEmailStep={setEmailStep} />
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

export default LoginModal;
