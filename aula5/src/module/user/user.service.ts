import { User, UserStore, UserUpdate } from './user'

let users: User[] = [
  {
    id: 1,
    email: 'teste@teste.com',
    password: 'teste'
  }
]

const getAll = (): User[] => {
  return users
}

const getOne = (id: number): User | undefined => {
  return users.find(user => user.id === id)
}

const getByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email)
}

const store = (param: UserStore): boolean => {
  users.push({
    id: users.length + 1,
    email: param.email,
    password: param.password
  })

  return true
}

const update = (id: number, param: UserUpdate): boolean => {
  users = users.map(user => {
    if (user.id === id) {
      return {
        ...user,
        ...param
      }
    }

    return user
  })

  return true
}

const destroy = (id: number): boolean => {
  users = users.filter(user => user.id !== id)
  return true
}

export default {
  getAll,
  getOne,
  getByEmail,
  store,
  destroy,
  update
}