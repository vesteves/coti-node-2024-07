import { Router } from 'express'
import jwt from 'jsonwebtoken'
import userService from '../user/user.service'

const router = Router()

router.post('/login', (req, res) => {
  // TODO verificar se o e-mail e senha vieram na requisição
  if (!req.body.email || !req.body.password) {
    return res.status(400).send()
  }
  // TODO verificar se o e-mail está na base
  const user = userService.getByEmail(req.body.email)
  if (!user) {
    return res.status(404).send()
  }

  // TODO verificar se a senha enviada é a mesma senha que está na base
  if (user.password !== req.body.password) {
    return res.status(403).send()
  }
  // retornar um token
  const token = jwt.sign(user.id.toString(), process.env.JWT_SECRET || "")
  return res.json(token)
})

router.get('/me', (req, res) => {
  try {
    const id = jwt.verify(req.headers.authorization!.split('bearer ')[1], process.env.JWT_SECRET || "")
    const user = userService.getOne(Number(id))
    return res.json(user)

  } catch (error: any) {
    return res.status(500).send()
  }
})

export default router