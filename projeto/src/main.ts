import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
dotenv.config()

const app = express()
app.use(express.json())

app.post('/teste', async (req: Request, res: Response) => {
  const schema = z.object({
    id: z.number({
      required_error: 'ID é obrigatório',
      invalid_type_error: 'ID precisa ser numérico'
    }),
    email: z.string({
      required_error: 'E-mail é obrigatório',
      invalid_type_error: 'E-mail precisa ser to tipo texto'
    }).email({
      message: 'E-mail mal formatado'
    }),
    password: z.string({
      required_error: 'Senha é obrigatória',
      invalid_type_error: 'Senha precisa ser to tipo texto'
    })
  })

  try {
    const validated = schema.parse(req.body)

    console.log('validated', validated)

    const encrypted = jwt.sign({
      id: validated.id
    }, process.env.SECRET || "")
    console.log('encrypted', encrypted)
    const decrypted = jwt.verify(encrypted, process.env.SECRET || "")
    console.log('decrypted', decrypted)

    const prisma = new PrismaClient()
    const store = await prisma.teste.create({
      data: {
        email: validated.email,
        password: validated.password
      }
    })
    console.log('store', store)
    const getAll = await prisma.teste.findMany()

    console.log('teste database', getAll)

    return res.json(getAll)
  } catch (error: any) {
    return res.status(422).json(error.errors)
  }
})

app.listen(process.env.PORT, () => {
  console.log('Server ON')
})