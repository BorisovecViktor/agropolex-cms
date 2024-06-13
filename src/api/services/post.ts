import { IPost } from '../types/post'
import { $api, API_URL } from '../http'

class PostService {
  getPosts() {
    // const basicUrl1c = 'https://1c-new.gbar.com.ua/agro_copy/hs/Project1/list'
    // const username = 'WebUser'
    // const password = 'T@DMt7k}By~8'
    // var credentials = btoa(username + ':' + password)
    // var basicAuth = 'Basic ' + credentials

    return $api.get<Array<IPost>>(
      `${API_URL}/posts`,
      //   {
      //   auth: {
      //     username,
      //     password,
      //   },
      // }
    )
  }

  getPost(id: number) {
    return $api.get<IPost>(`${API_URL}/posts/${id}`)
  }

  createPost(newPost: Omit<IPost, 'id'>) {
    return $api.post<IPost>(`${API_URL}/posts`, newPost)
  }
}

export const postService = new PostService()
