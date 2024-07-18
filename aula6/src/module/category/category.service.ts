import { Category, CategoryStore, CategoryUpdate } from "./category"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAll = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany({
    include: {
      products: true
    }
  })

  return result
}

const getById = async (id: number): Promise<Category | null> => {
  const result = await prisma.category.findFirst({
    where: { id },
    include: {
      products: true
    }
  })

  return result
}

const store = async (params: CategoryStore): Promise<Category> => {
  const result = await prisma.category.create({
    data: {
      name: params.name
    }
  })

  return result
}

const update = async (id: number, params: CategoryUpdate): Promise<Category> => {
  const result = await prisma.category.update({
    where: { id },
    data: {
      name: params.name
    }
  })

  return result
}

const destroy = async (id: number): Promise<Category> => {
  const result = await prisma.category.delete({
    where: { id }
  })

  return result
}

export default {
  getAll,
  getById,
  store,
  update,
  destroy
}