import { Base, BaseStore } from './base'

const bases: Base[] = [
  {
    id: 1,
  }
]

const getAll = (): Base[] => {
  return bases
}

const getOne = (id: number): Base | undefined => {
  return bases[0]
}

const getByEmail = (): Base | undefined => {
  return bases[0]
}

const store = (_: BaseStore): boolean => {
  bases.push({
    id: bases.length + 1,
  })

  return true
}

export default {
  getAll,
  getOne,
  getByEmail,
  store
}