import React from "react";

import { useForm } from "react-hook-form";

import TextInput from "../../TextInput/TextInput";

import { loginSchema, type loginData } from "../../../schemas/LoginSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

import type { LoginFormProps } from "./LoginForm.types";

import "./LoginForm.scss";

import { updateStepStatus } from "../../../utils/utils";

const LoginForm: React.FC<LoginFormProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useForm<loginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const handleNextClick = async () => {
    const actualInput =
      currentStep === 1
        ? "email"
        : currentStep === 2
          ? (["password", "confirm_password"] as const)
          : null;
    if (actualInput) {
      const isValid = await trigger(actualInput);
      const nextStep = currentStep + 1;
      updateStepStatus(isValid, setCurrentStep, nextStep, currentStep);
    }
  };

  return (
    <>
      <form className="login-form">
        {currentStep === 1 && (
          <TextInput
            inputObj={{
              label: "Email*",
              autoComplete: "email",
              placeholder: "you@example.com",
              type: "email",
              registerWith: "email",
              register: register,
              error: errors.email?.message,
            }}
          />
        )}
        {currentStep === 2 && (
          <>
            <TextInput
              inputObj={{
                label: "Password*",
                autoComplete: "new password",
                placeholder: "Password",
                type: "password",
                register: register,
                error: errors.password?.message,
                registerWith: "password",
                eyeIcon: "images/password/open-eye.png",
              }}
            />
            <TextInput
              inputObj={{
                label: "Confirm Password*",
                autoComplete: "new password",
                placeholder: "Confirm Password",
                type: "password",
                register: register,
                error: errors.confirm_password?.message,
                registerWith: "confirm_password",
                eyeIcon: "images/password/close-eye.png",
              }}
            />
          </>
        )}
        <>
          <TextInput
            inputObj={{
              label: "Username*",
              autoComplete: "name",
              placeholder: "Username",
              register: register,
              registerWith: "username",
              type: "text",
              error: errors.username?.message,
            }}
          />
          <TextInput
            inputObj={{
              label: "Upload Avatar",
              autoComplete: "off",
              placeholder: "",
              register: register,
              registerWith: "avatar",
              watch: watch,
              type: "file",
              error: errors.avatar?.message,
            }}
          />
        </>
      </form>
      <button type="button" onClick={handleNextClick} className="btn-next">
        Next
      </button>
    </>
  );
};

export default LoginForm;
