import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import userService from '../module/user/user.service'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).send()
  }

  console.log(req.headers.authorization)

  try {
    jwt.verify(req.headers.authorization.replace('bearer ', ''), process.env.JWT_SECRET || "")
  } catch (error: any) {
    return res.status(403).send()
  }

  try {
    const id = jwt.verify(req.headers.authorization!.split('bearer ')[1], process.env.JWT_SECRET || "")
    const user = userService.getOne(Number(id))
    res.locals.user = user

    return next()
  } catch (error: any) {
    return res.status(400).send()
  }
}

export default authMiddleware