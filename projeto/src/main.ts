import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import authMiddleware from './middleware/auth'

// rotas
import userRoute from './module/user/user.route'
import authRoute from './module/auth/auth.route'
import categoryRoute from './module/category/category.route'
import productRoute from './module/product/product.route'
import cartRoute from './module/cart/cart.route'

const app = express()
app.use(express.json())

app.use('/user', authMiddleware, userRoute)
app.use('/auth', authRoute)
app.use('/category', categoryRoute)
app.use('/product', productRoute)
app.use('/cart', authMiddleware, cartRoute)

app.listen(process.env.PORT, () => {
  console.log('Server ON')
})