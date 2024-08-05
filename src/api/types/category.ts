export type ISubCategory = {
  id: string
  name: string
  url: string
}

export type ICategory = {
  id: string
  name: string
  url: string
  subCategories: Array<ISubCategory>
}
