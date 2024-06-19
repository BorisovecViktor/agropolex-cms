import { ICategory } from 'api/types/category'
import { $api, API_URL } from 'api/http'

class CategoryService {
  getCategories() {
    return $api.get<Array<ICategory>>(`${API_URL}/list`)
  }

  getPost(id: number) {
    return $api.get<ICategory>(`${API_URL}/posts/${id}`)
  }

  createPost(newPost: Omit<ICategory, 'id'>) {
    return $api.post<ICategory>(`${API_URL}/posts`, newPost)
  }
}

export const categoryService = new CategoryService()
