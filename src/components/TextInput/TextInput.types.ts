import type { UseFormRegister } from "react-hook-form";
import type { loginData } from "../../schemas/LoginSchemas";

export interface TextInputProps {
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  registerWith: "email";
  register: UseFormRegister<loginData>;
}
