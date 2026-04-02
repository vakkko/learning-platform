import React from "react";

import "./LoginModal.scss";

import ProgressSteps from "./ProgressSteps/ProgressSteps";

import type { LoginModalProps } from "./LoginModal.types";

const LoginModal: React.FC<LoginModalProps> = ({ handleLoginClose }) => {
  return (
    <div className="modal">
      <button onClick={handleLoginClose} className="btn-close">
        <img src="images/x.png" alt="cancel" />
      </button>
      <div className="modal-content">
        <h3>Create Account</h3>
        <p>Join and start learning today</p>
        <ProgressSteps />
      </div>
    </div>
  );
};

export default LoginModal;
