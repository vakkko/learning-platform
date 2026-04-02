import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email format")
    .required("Email is required"),
});

export type loginData = yup.InferType<typeof loginSchema>;
