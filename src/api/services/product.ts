import {
  $api,
  // API_URL
} from 'api/http'
import { IProduct } from 'modules/product/type'

class ProductService {
  // getProduct(id: string) {
  //   return $api.get<any>(`${API_URL}/scu/${id}`)
  // }
  getProduct(id: string, pageParam: number) {
    return $api.get<Array<IProduct>>(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`,
      // `${API_URL}/scu/${id}?_page=${pageParam}`,
    )
  }
}

export const productService = new ProductService()
