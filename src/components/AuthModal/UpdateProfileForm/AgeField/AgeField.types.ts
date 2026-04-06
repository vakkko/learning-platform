import type { UseFormRegister } from "react-hook-form";
import type { updateProfileSchemaData } from "../../../../schemas/UpdateProfileSchema";

export interface AgeFieldProps {
  register: UseFormRegister<updateProfileSchemaData>;
  errors?: string;
}
