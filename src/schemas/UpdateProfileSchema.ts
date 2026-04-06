import * as yup from "yup";

import { requiredText } from "./AuthSchema";
const usernameRegex = /^[a-z\s]+$/i;

export const updateProfileSchema = yup.object({
  full_name: yup
    .string()
    .required(requiredText("Name"))
    .matches(usernameRegex, "User Name should contain only letters and spaces")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
});

export type updateProfileSchemaData = yup.InferType<typeof updateProfileSchema>;
