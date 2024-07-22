export type ISubFilter = {
  id: string
  title: string
}

export type IFilter = {
  id: string
  title: string
  content?: Array<ISubFilter>
}

export type IFilterData = {
  data: Array<IFilter>
}
