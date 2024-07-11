import express from 'express'
const app = express()
app.use(express.json())

import userRoute from './module/user/user.route'
import authRoute from './module/auth/auth.route'

app.use('/user', userRoute)
app.use('/auth', authRoute)

app.listen(8000, () => {
    console.log('Server ON!')
})
