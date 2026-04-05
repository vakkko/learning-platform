import React, { useEffect, useState } from "react";

import axios from "axios";

import { BASE_URL } from "../../../consts/consts";

import type { UserDataTypes } from "./UpdateProfileForm.types";
import ImagePreview from "../../TextInput/ImagePreview/ImagePreview";
import InputField from "./InputField/InputField";

const UpdateProfileForm: React.FC = () => {
  const token = sessionStorage.getItem("token");

  const [userData, setUserData] = useState<UserDataTypes>();

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
          />
          <button className="btn-next">Update Profile</button>
        </form>
      </div>
    )
  );
};

export default UpdateProfileForm;
