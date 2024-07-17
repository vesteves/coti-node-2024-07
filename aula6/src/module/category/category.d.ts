export interface CategoryBase {
  name: string
}

export interface Category extends CategoryBase {
  id: number
}

export interface CategoryStore extends CategoryBase { }

export type CategoryUpdate = Partial<CategoryBase>