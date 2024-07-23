import { $api } from 'api/http'
import { ICategory } from 'api/types/category'

class CategoryService {
  getCategories() {
    return $api.get<Array<ICategory>>('/categories')
  }

  // createPost(newPost: Omit<ICategory, 'id'>) {
  //   return $api.post<ICategory>(`${API_URL}/posts`, newPost)
  // }
}

export const categoryService = new CategoryService()
