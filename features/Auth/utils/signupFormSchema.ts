import * as Yup from "yup";

const signupSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export type SignupFormData = Yup.InferType<typeof signupSchema>;

export default signupSchema;
