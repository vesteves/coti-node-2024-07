export interface UserBase {
  email: string
  password: string
}

export interface User extends UserBase {
  id: number
}

export interface UserStore extends UserBase { }

export interface UserUpdate extends Partial<UserBase> { }
