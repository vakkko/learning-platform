import type { FieldValues, UseFormRegister } from "react-hook-form";

export interface TextInputProps {
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  registerWith: string;
  register: UseFormRegister<FieldValues>;
}
