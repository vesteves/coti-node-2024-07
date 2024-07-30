import { Router, Request, Response } from 'express'
import productService from './product.service'
import schemaValidate from '../../middleware/schemaValidate'
import { productStoreSchema, productUpdateSchema } from './product.schema'
import authMiddleware from '../../middleware/auth'

const router = Router()

router.get('/', async (_: Request, res: Response) => {
  const result = await productService.getAll()
  return res.json(result)
})

router.get('/:id', async (req: Request, res: Response) => {
  const result = await productService.getOne(parseInt(req.params.id, 10))
  return res.json(result)
})

router.post('/', authMiddleware, schemaValidate(productStoreSchema), async (_: Request, res: Response) => {
  const result = await productService.store(res.locals.validated)
  return res.json(result)
})

router.put('/:id', authMiddleware, schemaValidate(productUpdateSchema), async (req: Request, res: Response) => {
  const result = await productService.update(parseInt(req.params.id, 10), res.locals.validated)
  return res.json(result)
})

router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  const result = await productService.destroy(Number(req.params.id))
  return res.json(result)
})

export default router