import React, { useEffect, useState } from "react";

import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ImagePreview from "../../TextInput/ImagePreview/ImagePreview";
import InputField from "./InputField/InputField";

import { BASE_URL } from "../../../consts/consts";

import type { UserDataTypes } from "./UpdateProfileForm.types";
import {
  type updateProfileSchemaData,
  updateProfileSchema,
} from "../../../schemas/UpdateProfileSchema";

const UpdateProfileForm: React.FC = () => {
  const token = sessionStorage.getItem("token");

  const [userData, setUserData] = useState<UserDataTypes>();

  const {
    register,
    formState: { errors },
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
      <div>
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
          />
          <button className="btn-next">Update Profile</button>
        </form>
      </div>
    )
  );
};

export default UpdateProfileForm;
