import * as yup from "yup";

const requiredText = (field: string) => {
  return `${field} is required`;
};

const loginFields = {
  email: yup
    .string()
    .email("Invalid Email format")
    .required(requiredText("Email")),
  password: yup
    .string()
    .required(requiredText("Password"))
    .min(4, "Passowrd must be at least 3 character"),
};

export const signUpSchema = yup.object({
  ...loginFields,
  password_confirmation: yup
    .string()
    .required(requiredText("Confirm Password"))
    .min(4, "Minimal length should be 3")
    .oneOf([yup.ref("password")], "Passowrds must match"),
  username: yup
    .string()
    .required(requiredText("Username"))
    .min(4, "Username must be at least 3 character"),
  avatar: yup.mixed<FileList>().nullable().notRequired().default(null),
});

export type signUpData = yup.InferType<typeof signUpSchema>;
export type loginData = yup.InferType<typeof loginSchema>;

export const loginSchema = yup.object(loginFields);
