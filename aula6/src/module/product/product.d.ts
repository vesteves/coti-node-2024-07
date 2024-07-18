export interface ProductBase {
  name: string
  price: number
  qtd: number
  categoryId: number
}

export interface Product extends ProductBase {
  id: number
}

export interface ProductStore extends ProductBase { }

export type ProductUpdate = Partial<ProductBase>