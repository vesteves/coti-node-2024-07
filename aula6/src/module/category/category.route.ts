import { Router, Request, Response } from "express";
import categoryService from "./category.service";

export const router = Router()

router.get('/', (req: Request, res: Response) => {
  const result = categoryService.getAll()

  return res.json(result)
})

router.get('/:id', (req: Request, res: Response) => {
  const result = categoryService.getById(parseInt(req.params.id, 10))

  return res.json(result)
})

router.post('/', (req: Request, res: Response) => {
  const result = categoryService.store(req.body)

  return res.json(result)
})

router.put('/:id', (req: Request, res: Response) => {
  const result = categoryService.update(parseInt(req.params.id, 10), req.body)

  return res.json(result)
})

router.delete('/:id', (req: Request, res: Response) => {
  const result = categoryService.destroy(parseInt(req.params.id, 10))

  return res.json(result)
})