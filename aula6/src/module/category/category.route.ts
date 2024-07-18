import { Router, Request, Response } from "express";
import categoryService from "./category.service";

export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const result = await categoryService.getAll()

  return res.json(result)
})

router.get('/:id', async (req: Request, res: Response) => {
  const result = await categoryService.getById(parseInt(req.params.id, 10))

  return res.json(result)
})

router.post('/', async (req: Request, res: Response) => {
  const result = await categoryService.store(req.body)

  return res.json(result)
})

router.put('/:id', async (req: Request, res: Response) => {
  const result = await categoryService.update(parseInt(req.params.id, 10), req.body)

  return res.json(result)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const result = await categoryService.destroy(parseInt(req.params.id, 10))

  return res.json(result)
})