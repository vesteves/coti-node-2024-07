import { Router, Request, Response } from 'express'
import schemaValidate from '../../middleware/schemaValidate'
import { authSchema, registerSchema } from './auth.schema'
import authService from './auth.service'
import userService from '../user/user.service'
import authMiddleware from '../../middleware/auth'

const router = Router()

router.post('/login', schemaValidate(authSchema), async (req: Request, res: Response) => {
  try {
    const result = await authService.login(res.locals.validated)
    return res.json(result)
  } catch (error: any) {
    return res.status(error.status).json({
      message: error.message
    })
  }
})

router.post('/register', schemaValidate(registerSchema), async (_: Request, res: Response) => {
  const result = await userService.store(res.locals.validated)
  return res.json(result)
})

router.get('/me', authMiddleware, async (_: Request, res: Response) => {
  const result = await userService.getOne(res.locals.user.id)

  return res.json({
    id: result?.id,
    email: result?.email,
  })
})

export default router