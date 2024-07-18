import { Router, Request, Response } from "express";
import productService from "./product.service";

export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const result = await productService.getAll()

  return res.json(result)
})

router.get('/:id', async (req: Request, res: Response) => {
  const result = await productService.getById(parseInt(req.params.id, 10))

  return res.json(result)
})

router.post('/', async (req: Request, res: Response) => {
  const result = await productService.store(req.body)

  return res.json(result)
})

router.put('/:id', async (req: Request, res: Response) => {
  const result = await productService.update(parseInt(req.params.id, 10), req.body)

  return res.json(result)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const result = await productService.destroy(parseInt(req.params.id, 10))

  return res.json(result)
})