import { Router, Request, Response } from 'express'
import baseService from './base.service'

const router = Router()

router.get('/', (_: Request, res: Response) => {
  const result = baseService.getAll()

  return res.json(result)
})

router.get('/:id', (req: Request, res: Response) => {
  const result = baseService.getOne(Number(req.params.id))
  return res.json(result)
})

router.post('/', (req: Request, res: Response) => {
  const result = baseService.store(req.body)
  return res.json(result)
})

export default router