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
    .min(3, "Passowrd must be at least 3 character"),
  confirm_password: yup
    .string()
    .required(requiredText("Confirm Password"))
    .min(3, "Minimal length should be 3")
    .oneOf([yup.ref("password")], "Passowrds must match"),
});

export type loginData = yup.InferType<typeof loginSchema>;
