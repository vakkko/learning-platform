import type { Dispatch, SetStateAction } from "react";

import type { UseFormReset } from "react-hook-form";

import axios from "axios";

import { BASE_URL } from "../consts/consts";

import type { signUpData } from "../schemas/AuthSchema";
import type { updateProfileSchemaData } from "../schemas/UpdateProfileSchema";

export function updateStepStatus(
  isValid: boolean,
  updateState: Dispatch<SetStateAction<number>>,
  nextValue: number,
  currentValue: number,
) {
  if (isValid) {
    updateState(nextValue);
  } else {
    updateState(currentValue);
  }
}

type formDataUnion = signUpData | updateProfileSchemaData;

export const submitHandle = async <T extends formDataUnion>(
  data: formDataUnion,
  method: "post" | "put",
  endpoint: "register" | "profile",
  formData: FormData,
  closeModalFunc: () => void,
  reset: UseFormReset<T>,
  setServerError: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  token?: string,
) => {
  if (data.avatar && data.avatar[0] && formData) {
    formData.append("avatar", data.avatar[0]);
  }

  try {
    const response = await axios({
      method: method,
      url: `${BASE_URL}/${endpoint}`,
      data: formData,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (response.status === 201) {
      sessionStorage.setItem("token", response.data.data.token);
      sessionStorage.setItem("avatar", response.data.data.user.avatar);

      closeModalFunc();
      reset();
    }
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
