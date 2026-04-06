import type { UseFormGetFieldState, UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  iconSrc?: string;
  registerWith?: "full_name";
  autoComplete?: string;
  register?: UseFormRegister<{
    full_name: string;
  }>;
  getFieldState?: UseFormGetFieldState<{
    full_name: string;
  }>;
  errors?: string;
  disabled?: boolean;
}
