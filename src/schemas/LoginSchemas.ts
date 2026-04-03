import * as yup from "yup";

const requiredText = (field: string) => {
  return `${field} is required`;
};

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email format")
    .required(requiredText("Email")),
  password: yup
    .string()
    .required(requiredText("Password"))
    .min(4, "Passowrd must be at least 3 character"),
  confirm_password: yup
    .string()
    .required(requiredText("Confirm Password"))
    .min(4, "Minimal length should be 3")
    .oneOf([yup.ref("password")], "Passowrds must match"),
  username: yup
    .string()
    .required(requiredText("Username"))
    .min(4, "Username must be at least 3 character"),
});

export type loginData = yup.InferType<typeof loginSchema>;
