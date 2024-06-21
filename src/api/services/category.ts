import { ICategory } from 'api/types/category'
import { $api, API_URL } from 'api/http'

class CategoryService {
  getCategories() {
    return $api.get<Array<ICategory>>(`${API_URL}/categories`)
  }

  // createPost(newPost: Omit<ICategory, 'id'>) {
  //   return $api.post<ICategory>(`${API_URL}/posts`, newPost)
  // }
}

export const categoryService = new CategoryService()
