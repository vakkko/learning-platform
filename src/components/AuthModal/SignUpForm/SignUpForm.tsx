import React, { useState } from "react";

import { useForm, type SubmitHandler } from "react-hook-form";

import TextInput from "../../TextInput/TextInput";

import { signUpSchema, type signUpData } from "../../../schemas/AuthSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import type { SignUpProps } from "./SignUpForm";

import { updateStepStatus } from "../../../utils/utils";

import { submitHandle } from "../../../utils/utils";

import "./SignUpForm.scss";

import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const SignUpForm: React.FC<SignUpProps> = ({
  currentStep,
  setCurrentStep,
  handleModalClose,
}) => {
  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signUpData>({
    resolver: yupResolver(signUpSchema),
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

  const onSubmit: SubmitHandler<signUpData> = async (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);
    formData.append("username", data.username);

    submitHandle(
      data,
      "post",
      "register",
      formData,
      handleModalClose,
      reset,
      setServerError,
    );
  };

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
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
          className="form-btn"
        >
          {currentStep === 3 ? "Sign Up" : "Next"}
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
