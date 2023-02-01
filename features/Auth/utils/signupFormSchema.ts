import * as Yup from 'yup'

const signupSchema = Yup.object({
  Email: Yup.string().email().required(),
  Password: Yup.string().required(),
  DisplayName: Yup.string().required(),
})

export type SignupFormData = Yup.InferType<typeof signupSchema>

export default signupSchema
