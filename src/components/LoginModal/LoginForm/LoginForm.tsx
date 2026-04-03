import React from "react";

import { useForm } from "react-hook-form";

import TextInput from "../../TextInput/TextInput";

import { loginSchema, type loginData } from "../../../schemas/LoginSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

import type { LoginFormProps } from "./LoginForm.types";

import "./LoginForm.scss";

const LoginForm: React.FC<LoginFormProps> = ({ setEmailStep }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<loginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const handleNextClick = async () => {
    const isValid = await trigger("email");
    if (isValid) {
      setEmailStep(true);
    } else {
      setEmailStep(false);
    }
  };
  return (
    <>
      <form className="login-form">
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
      <button onClick={handleNextClick} className="btn-next">
        Next
      </button>
    </>
  );
};

export default LoginForm;
