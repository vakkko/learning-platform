import type { Dispatch, SetStateAction } from "react";

export interface LoginFormProps {
  setEmailStep: Dispatch<SetStateAction<boolean>>;
}
