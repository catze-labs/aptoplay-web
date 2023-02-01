import * as Yup from 'yup'

const loginSchema = Yup.object({
  Email: Yup.string().email().required(),
  Password: Yup.string().required(),
})

/**
 * Infer the type of the values from the validation schema
 */
export type LoginFormData = Yup.InferType<typeof loginSchema>

export default loginSchema
