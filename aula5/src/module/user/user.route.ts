import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import userService from './user.service'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  if (!req.headers.authorization) {
    return res.status(401).send()
  }

  try {
    jwt.verify(req.headers.authorization.replace('bearer ', ''), process.env.JWT_SECRET || "")
  } catch (error: any) {
    console.log(error)
    return res.status(403).send()
  }

  const result = userService.getAll()

  return res.json(result)
})

router.get('/:id', (req: Request, res: Response) => {
  const result = userService.getOne(Number(req.params.id))
  return res.json(result)
})

router.post('/', (req: Request, res: Response) => {
  const result = userService.store(req.body)
  return res.json(result)
})

export default router