import { Category, CategoryStore, CategoryUpdate } from "./category"

const getAll = (): Category[] => {
  return []
}

const getById = (id: number): Category => {
  return {
    id: 1,
    name: 'xpto'
  }
}

const store = (params: CategoryStore): boolean => {
  return true
}

const update = (id: number, params: CategoryUpdate): boolean => {
  return true
}

const destroy = (id: number): boolean => {
  return true
}

export default {
  getAll,
  getById,
  store,
  update,
  destroy
}