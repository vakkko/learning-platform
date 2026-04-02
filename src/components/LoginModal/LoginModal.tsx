import React from "react";

import { useForm } from "react-hook-form";

import ProgressSteps from "./ProgressSteps/ProgressSteps";
import TextInput from "../TextInput/TextInput";

import type { LoginModalProps } from "./LoginModal.types";

import "./LoginModal.scss";

const LoginModal: React.FC<LoginModalProps> = ({ handleLoginClose }) => {
  const { register } = useForm();

  return (
    <div className="modal">
      <button onClick={handleLoginClose} className="btn-close">
        <img src="images/x.png" alt="cancel" />
      </button>
      <div className="modal-content">
        <h3>Create Account</h3>
        <p>Join and start learning today</p>
        <ProgressSteps />
        <form>
          <TextInput
            inputObj={{
              label: "Email",
              autoComplete: "email",
              placeholder: "you@example.com",
              type: "email",
              registerWith: "email",
              register: register,
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
