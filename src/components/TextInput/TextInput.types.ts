import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface TextInputProps<T extends FieldValues> {
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  registerWith: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  eyeIcon?: string;
  accept?: string;
}

export interface ImageDetails {
  size: string;
  name: string;
}
