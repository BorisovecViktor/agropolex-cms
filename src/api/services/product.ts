import { $api } from 'api/http'
import { IProduct } from 'api/types/product'
import { IUrlParams } from 'api/types/url-params'
// import qs from 'qs'

class ProductService {
  getProducts({ id, page, limit = 50, search, filters }: IUrlParams) {
    return $api.get<Array<IProduct>>(
      `/scu/${id}/${page}/${limit}`,
      // `https://jsonplaceholder.typicode.com/todos`,
      // {
      //   params: {
      //     _page: page,
      //     _limit: limit,
      //     title: search ? search : undefined,
      //     filter: filters && filters.length > 0 ? filters : undefined,
      //   },
      //   paramsSerializer: (params) => {
      //     return qs.stringify(params)
      //   },
      // },
    )
  }
}

export const productService = new ProductService()
