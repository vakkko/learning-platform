import type { UseFormRegister } from "react-hook-form";
import type { loginData } from "../../schemas/AuthSchema";

export interface TextInputProps {
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  registerWith:
    | "email"
    | "password"
    | "password_confirmation"
    | "username"
    | "avatar";
  register: UseFormRegister<loginData>;
  error?: string;
  eyeIcon?: string;
  accept?: string;
}

export interface ImageDetails {
  size: string;
  name: string;
}
