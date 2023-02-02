import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

/**
 * Infer the type of the values from the validation schema
 */
export type LoginFormData = Yup.InferType<typeof loginSchema>;

export default loginSchema;
