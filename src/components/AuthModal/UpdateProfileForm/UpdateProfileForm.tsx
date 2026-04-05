import React, { useEffect, useState } from "react";

import axios from "axios";

import { BASE_URL } from "../../../consts/consts";

import type { UserDataTypes } from "./UpdateProfileForm.types";
import ImagePreview from "../../TextInput/ImagePreview/ImagePreview";

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
      <form className="auth-form">
        <ImagePreview
          preview={userData.avatar}
          userName={userData.username}
          updateUserStep
        />
        <button className="btn-next">Update Profile</button>
      </form>
    )
  );
};

export default UpdateProfileForm;
