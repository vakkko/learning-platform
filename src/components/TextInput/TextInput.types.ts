import type { UseFormRegister } from "react-hook-form";
import type { loginData, signUpData } from "../../schemas/AuthSchema";

type AllFields = keyof loginData | keyof signUpData;

export interface TextInputProps {
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  registerWith: AllFields;
  register: UseFormRegister<loginData | signUpData>;
  error?: string;
  eyeIcon?: string;
  accept?: string;
}

export interface ImageDetails {
  size: string;
  name: string;
}
