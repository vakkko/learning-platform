import type { UseFormRegister, UseFormWatch } from "react-hook-form";
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
  watch?: UseFormWatch<{
    email: string;
    password: string;
    confirm_password: string;
    username: string;
    avatar: File | null;
  }>;
  eyeIcon?: string;
}
