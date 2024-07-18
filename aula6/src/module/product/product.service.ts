import { Product, ProductStore, ProductUpdate } from "./product"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAll = async (): Promise<Product[]> => {
  const result = await prisma.product.findMany({
    include: {
      Category: true,
    },
  })

  return result
}

const getById = async (id: number): Promise<Product | null> => {
  const result = await prisma.product.findFirst({
    where: { id },
    include: {
      Category: true,
    },
  })

  return result
}

const store = async (params: ProductStore): Promise<Product> => {
  const result = await prisma.product.create({
    data: {
      name: params.name,
      price: params.price,
      qtd: params.qtd,
      categoryId: params.categoryId
    }
  })

  return result
}

const update = async (id: number, params: ProductUpdate): Promise<Product> => {
  const result = await prisma.product.update({
    where: { id },
    data: {
      name: params.name,
      price: params.price,
      qtd: params.qtd,
      categoryId: params.categoryId
    }
  })

  return result
}

const destroy = async (id: number): Promise<Product> => {
  const result = await prisma.product.delete({
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