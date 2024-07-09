import express from 'express'
import userRoute from './module/user/user.router'

const app = express()
app.use(express.json());

app.use('/user', userRoute)

app.listen(8000, () => {
  console.log('Sistema ON')
});
