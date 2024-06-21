export type ISubCategory = {
  id: string
  name: string
  path: string
}

export type ICategory = {
  id: string
  name: string
  path: string
  subCategories: Array<ISubCategory>
}
