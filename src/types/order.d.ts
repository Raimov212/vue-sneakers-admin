export interface OrderType {
  id: number
  title: string
  image: string
  price: number
  isFavorite: boolean
  isAdded: boolean
  favoriteId: boolean
}

export interface OrdersDataType {
  order: OrderType[]
  total: number
  id: number
}
