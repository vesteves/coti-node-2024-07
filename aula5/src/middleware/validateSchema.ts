import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";


export const validateSchemaMiddleware = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    // Faça um parse do schema
    const validated = schema.parse(req.body)
    res.locals.validated = validated

    return next()
  } catch (error: any) {
    // caso encontre erros, retorne quais erros encontrou
    return res.status(422).json(error.errors)
  }
}