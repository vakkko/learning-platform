import React, { useEffect, useState } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  type updateProfileSchemaData,
  updateProfileSchema,
} from "../../../schemas/UpdateProfileSchema";

import ImagePreview from "../../TextInput/ImagePreview/ImagePreview";
import InputField from "./InputField/InputField";
import AgeField from "./AgeField/AgeField";
import TextInput from "../../TextInput/TextInput";

import { BASE_URL } from "../../../consts/consts";

import type { UserDataTypes } from "./UpdateProfileForm.types";

import "./UpdateProfileForm.scss";

const UpdateProfileForm: React.FC = () => {
  const token = sessionStorage.getItem("token");

  const [userData, setUserData] = useState<UserDataTypes>();

  const {
    register,
    formState: { errors },
    getFieldState,
  } = useForm<updateProfileSchemaData>({
    mode: "onBlur",
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

  return (
    userData && (
      <div className="update-profile-container">
        <ImagePreview
          preview={userData.avatar}
          userName={userData.username}
          updateUserStep
        />
        <form className="auth-form">
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
          <button className="btn-next">Update Profile</button>
        </form>
      </div>
    )
  );
};

export default UpdateProfileForm;
