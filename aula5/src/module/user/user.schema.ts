import { z } from 'zod'

export const userStoreSchema = z.object({
  email: z.string({
    required_error: "E-mail é obrigatório",
    invalid_type_error: "E-mail deve ser do tipo texto",
  }).email({
    message: 'Deve conter um e-mail válido'
  }),
  password: z.string({
    required_error: "Senha é obrigatória",
    invalid_type_error: "Senha deve ser do tipo texto",
  }).min(5, {
    message: "A senha deverá conter mais que 4 caracteres"
  })
})

export const userUpdateSchema = z.object({
  email: z.string({
    required_error: "E-mail é obrigatório",
    invalid_type_error: "E-mail deve ser do tipo texto",
  }).email({
    message: 'Deve conter um e-mail válido'
  }).optional(),
  password: z.string({
    required_error: "Senha é obrigatória",
    invalid_type_error: "Senha deve ser do tipo texto",
  }).min(5, {
    message: "A senha deverá conter mais que 4 caracteres"
  }).optional()
})

export default {
  userStoreSchema,
  userUpdateSchema
}