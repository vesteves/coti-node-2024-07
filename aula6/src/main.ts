import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import { router as categoryRouter } from './module/category/category.route'

const app = express()
app.use(express.json())

app.use('/category', categoryRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server ON listening port ${process.env.PORT || 8000}`)
})

// 1 x N <> 1 x 1

// N x N (tabela de ligação)
// 1 x N <> 1 x N