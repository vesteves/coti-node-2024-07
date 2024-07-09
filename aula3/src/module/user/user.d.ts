export interface UserBase {
  nome: string
  idade: number
}

export interface User extends UserBase {
  id: number
}

export interface UserStore extends UserBase { }

export type UserUpdate = Partial<UserBase>