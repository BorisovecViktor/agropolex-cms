import { $api } from 'api/http'
import { IProduct } from 'api/types/product'

class ProductService {
  getProduct(id: string, pageParam: number) {
    return $api.get<Array<IProduct>>(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`,
      // `/scu/${id}?_page=${pageParam}`,
    )
  }
}

export const productService = new ProductService()
