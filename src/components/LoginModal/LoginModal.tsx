import React from "react";

import { useForm } from "react-hook-form";

import ProgressSteps from "./ProgressSteps/ProgressSteps";
import TextInput from "../TextInput/TextInput";

import type { LoginModalProps } from "./LoginModal.types";

import { loginSchema, type loginData } from "../../schemas/LoginSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

import "./LoginModal.scss";

const LoginModal: React.FC<LoginModalProps> = ({ handleLoginClose }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<loginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

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
              error: errors.email?.message,
            }}
          />
        </form>
        <button onClick={() => trigger("email")} className="btn-next">
          Next
        </button>
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
