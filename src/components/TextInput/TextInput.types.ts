import type { UseFormRegister } from "react-hook-form";
import type { loginData } from "../../schemas/LoginSchemas";

export interface TextInputProps {
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  registerWith:
    | "email"
    | "password"
    | "confirm_password"
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
