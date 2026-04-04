import React, { useState } from "react";

import { useForm, type SubmitHandler } from "react-hook-form";

import axios from "axios";

import TextInput from "../../TextInput/TextInput";

import { loginSchema, type loginData } from "../../../schemas/LoginSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

import type { LoginFormProps } from "./LoginForm.types";

import { updateStepStatus } from "../../../utils/utils";

import { BASE_URL } from "../../../consts/consts";

import "./LoginForm.scss";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const LoginForm: React.FC<LoginFormProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldUnregister: false,
  });

  const [serverError, setServerError] = useState<string[]>();

  const handleNextClick = async () => {
    const actualInput =
      currentStep === 1
        ? "email"
        : currentStep === 2
          ? (["password", "password_confirmation"] as const)
          : null;
    if (actualInput) {
      const isValid = await trigger(actualInput);
      const nextStep = currentStep + 1;
      updateStepStatus(isValid, setCurrentStep, nextStep, currentStep);
    }
  };

  const onSubmit: SubmitHandler<loginData> = async (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);
    formData.append("username", data.username);

    if (data.avatar && data.avatar[0]) {
      formData.append("avatar", data.avatar[0]);
    }

    try {
      const response = await axios.post(`${BASE_URL}/register`, formData);
      if (response.status === 201)
        sessionStorage.setItem("token", response.data.token);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errors = Object.values(error.response?.data.errors);
        if (errors.length > 1) {
          setServerError(errors.flat() as string[]);
        }
        setServerError(errors as string[]);
      }
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
                error: errors.password_confirmation?.message,
                registerWith: "password_confirmation",
                eyeIcon: "images/password/close-eye.png",
              }}
            />
          </>
        )}
        <>
          {currentStep === 3 && (
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
                  type: "file",
                  error: errors.avatar?.message,
                  accept: ".jpg, .png, .WebP",
                }}
              />
            </>
          )}
        </>
        {serverError && <ErrorMessage error={serverError} />}
        <button
          type={currentStep === 3 ? "submit" : "button"}
          onClick={currentStep === 3 ? undefined : handleNextClick}
          className="btn-next"
        >
          {currentStep === 3 ? "Sign Up" : "Next"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
