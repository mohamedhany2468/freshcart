export interface Category {
  results: number
  metadata: Metadata
  data: DaumCategory[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface DaumCategory {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
