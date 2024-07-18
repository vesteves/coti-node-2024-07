import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import { router as categoryRouter } from './module/category/category.route'
import { router as productRouter } from './module/product/product.route'

const app = express()
app.use(express.json())

app.use('/category', categoryRouter)
app.use('/product', productRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server ON listening port ${process.env.PORT || 8000}`)
})
