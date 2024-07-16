import { Router, Request, Response } from 'express'
import userService from './user.service'
import { userStoreSchema, userUpdateSchema } from './user.schema'
import { validateSchemaMiddleware } from '../../middleware/validateSchema'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  const result = userService.getAll()

  return res.json(result)
})

router.get('/:id', (req: Request, res: Response) => {
  const result = userService.getOne(Number(req.params.id))
  return res.json(result)
})

router.post('/', validateSchemaMiddleware(userStoreSchema), (_: Request, res: Response) => {
  const result = userService.store(res.locals.validated)
  return res.json(result)
})

router.put('/:id', validateSchemaMiddleware(userUpdateSchema), (req: Request, res: Response) => {
  const result = userService.update(Number(req.params.id), res.locals.validated)
  return res.json(result)
})

router.delete('/:id', (req: Request, res: Response) => {
  userService.destroy(Number(req.params.id))

  return res.json({
    msg: 'Usuário removido'
  })
})

export default router