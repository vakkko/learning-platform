import * as yup from "yup";

import { requiredText } from "./AuthSchema";

import { MAX_FILE_SIZE } from "../consts/consts";

const usernameRegex = /^[a-z\s]+$/i;

export const updateProfileSchema = yup.object({
  full_name: yup
    .string()
    .required(requiredText("Name"))
    .matches(usernameRegex, "User Name should contain only letters and spaces")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
  mobile_number: yup
    .string()
    .required(requiredText("Mobile number"))
    .test(
      "valid format",
      "Please enter a valid Georgian mobile number (9 digits starting with 5)",
      (value) => {
        const splited = value.split(" ");
        const joined = splited.join("");
        if (isNaN(Number(joined))) return false;
        return true;
      },
    )
    .test(
      "start of mobile number",
      "Georgian mobile numbers must start with 5",
      (value) => {
        if (!value.startsWith("5")) return false;
        return true;
      },
    )
    .test(
      "length of mobile number",
      "Mobile number must be exactly 9 digits",
      (value) => {
        const splited = value.split(" ");
        const joined = splited.join("");
        if (joined.length === 9) return true;
        return false;
      },
    ),
  age: yup
    .number()
    .required()
    .min(16, "You must be at least 16 years old to enroll")
    .max(120, "Please enter a valid age"),
  avatar: yup
    .mixed<FileList>()
    .nullable()
    .notRequired()
    .test(
      "file size",
      "The file is too large. Maximum size is 1 MB",
      (value) => {
        if (!value || value.length === 0) return true;

        return value[0].size <= MAX_FILE_SIZE;
      },
    )
    .default(null),
});

export type updateProfileSchemaData = yup.InferType<typeof updateProfileSchema>;
