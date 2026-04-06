import type { UseFormGetFieldState, UseFormRegister } from "react-hook-form";
import type { updateProfileSchemaData } from "../../../../schemas/UpdateProfileSchema";

export interface InputFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  iconSrc?: string;
  registerWith?: "full_name" | "mobile_number";
  autoComplete?: string;
  register?: UseFormRegister<updateProfileSchemaData>;
  getFieldState?: UseFormGetFieldState<updateProfileSchemaData>;
  errors?: string;
  disabled?: boolean;
}
