export type ProductsType = {
  [key: number]: ProductType
}

export type ProductType = {
    id: number,
    name: string,
    price: number,
    image: string,
    category: string,
    description: string,
    rating: number,
    featured: boolean
}
