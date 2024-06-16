import { IPost } from 'api/types/post'
import { $api, API_URL } from 'api/http'

class PostService {
  getPosts() {
    return $api.get<Array<any>>(`${API_URL}/list`)
  }

  getPost(id: number) {
    return $api.get<IPost>(`${API_URL}/posts/${id}`)
  }

  createPost(newPost: Omit<IPost, 'id'>) {
    return $api.post<IPost>(`${API_URL}/posts`, newPost)
  }
}

export const postService = new PostService()
