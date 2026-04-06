import React, { useState } from "react";

import axios from "axios";

import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type loginData, loginSchema } from "../../../schemas/AuthSchema";

import TextInput from "../../TextInput/TextInput";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import { BASE_URL } from "../../../consts/consts";
import type { LoginFormProps } from "./LoginForm.types";

const LoginForm: React.FC<LoginFormProps> = ({ handleModalClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldUnregister: false,
  });
  const [serverError, setServerError] = useState<string>();

  const onSubmit: SubmitHandler<loginData> = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, data);
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.data.token);
        sessionStorage.setItem("avatar", response.data.data.user.avatar);
        handleModalClose();
        reset();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data.message;
        setServerError(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
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
      {serverError && <ErrorMessage error={[serverError]} />}

      <button type="submit" className="form-btn">
        Next
      </button>
    </form>
  );
};

export default LoginForm;
