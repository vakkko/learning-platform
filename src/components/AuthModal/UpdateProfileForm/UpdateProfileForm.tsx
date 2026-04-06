import React, { useEffect, useState } from "react";

import axios from "axios";

import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  type updateProfileSchemaData,
  updateProfileSchema,
} from "../../../schemas/UpdateProfileSchema";

import ImagePreview from "../../TextInput/ImagePreview/ImagePreview";
import InputField from "./InputField/InputField";
import AgeField from "./AgeField/AgeField";
import TextInput from "../../TextInput/TextInput";

import { submitHandle } from "../../../utils/utils";

import { BASE_URL } from "../../../consts/consts";

import type {
  UpdateProfileFormProps,
  UserDataTypes,
} from "./UpdateProfileForm.types";

import "./UpdateProfileForm.scss";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const UpdateProfileForm: React.FC<UpdateProfileFormProps> = ({
  handleModalClose,
}) => {
  const token = sessionStorage.getItem("token");

  const [userData, setUserData] = useState<UserDataTypes>();
  const [serverError, setServerError] = useState<string[]>();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getFieldState,
    reset,
    trigger,
  } = useForm<updateProfileSchemaData>({
    mode: "onBlur",
    defaultValues: {
      age: userData?.age,
      full_name: userData?.fullName,
      mobile_number: userData?.mobileNumber,
    },
    resolver: yupResolver(updateProfileSchema),
  });

  useEffect(() => {
    async function getUSerInfo() {
      try {
        const response = await axios.get(`${BASE_URL}/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 200) {
          setUserData(response.data.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    getUSerInfo();
  }, [token]);

  useEffect(() => {
    if (userData) {
      reset({
        age: userData.age,
        full_name: userData.fullName,
        mobile_number: userData.mobileNumber,
      });
      trigger();
    }
  }, [userData, reset, trigger]);

  const onSubmit: SubmitHandler<updateProfileSchemaData> = (data) => {
    const formData = new FormData();

    formData.append("full_name", data.full_name);
    formData.append("mobile_number", data.mobile_number);
    formData.append("age", String(data.age));

    if (token)
      submitHandle(
        data,
        "put",
        "profile",
        formData,
        handleModalClose,
        reset,
        setServerError,
        token,
      );
  };

  return (
    userData && (
      <div className="update-profile-container">
        <ImagePreview
          preview={userData.avatar}
          userName={userData.username}
          updateUserStep
        />
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <InputField
            label="Full Name"
            placeholder="Username"
            iconSrc="images/input/pen.png"
            autoComplete="name"
            registerWith="full_name"
            register={register}
            errors={errors.full_name?.message}
            getFieldState={getFieldState}
          />
          <InputField
            label="Email"
            placeholder="Username"
            autoComplete="off"
            value={userData.email}
            disabled
          />
          <div className="number-and-age-fields">
            <InputField
              label="Mobile Number"
              autoComplete="tel"
              register={register}
              registerWith="mobile_number"
              errors={errors.mobile_number?.message}
              iconSrc="images/input/pen.png"
              getFieldState={getFieldState}
              placeholder="5XX XXX XXX"
            />
            <AgeField
              register={register}
              errors={errors.age?.message}
              getFieldState={getFieldState}
            />
          </div>
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
          {serverError && <ErrorMessage error={serverError} />}
          <button type="submit" className="form-btn">
            Update Profile
          </button>
        </form>
      </div>
    )
  );
};

export default UpdateProfileForm;
