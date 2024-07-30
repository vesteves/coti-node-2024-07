import { Router, Request, Response } from 'express'
import cartService from './cart.service'
import schemaValidate from '../../middleware/schemaValidate'
import { cartStoreSchema } from './cart.schema'

const router = Router()

router.get('/', async (_: Request, res: Response) => {
  const result = await cartService.getAll(res.locals.user.id)
  return res.json(result)
})

router.post('/', schemaValidate(cartStoreSchema), async (_: Request, res: Response) => {
  try {
    const result = await cartService.upsert({
      userId: res.locals.user.id,
      ...res.locals.validated,
    })
    return res.json(result)
  } catch (error: any) {
    return res.status(error.status).json({
      message: error.message
    })
  }
})

router.delete('/clear', async (_: Request, res: Response) => {
  const result = await cartService.clear(res.locals.user.id)
  return res.json(result)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const result = await cartService.destroy(Number(req.params.id))
  return res.json(result)
})

export default router