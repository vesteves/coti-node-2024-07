import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

// import baseRoute from './module/base/base.route'
import userRoute from './module/user/user.route'
import authRoute from './module/auth/auth.route'

// app.use('/base', baseRoute)
app.use('/user', userRoute)
app.use('/auth', authRoute)

app.listen(8000, () => {
    console.log('Server ON!')
})
