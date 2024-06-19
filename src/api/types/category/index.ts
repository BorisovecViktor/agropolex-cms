export type ISubCategory = {
  Subcategory_ID: string
  Subcategory_Name: string
}

export type ICategory = {
  Category_ID: string
  Category_Name: string
  Subcategories: Array<ISubCategory>
}
