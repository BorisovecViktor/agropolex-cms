import { Link } from 'react-router-dom'
import { NotFoundPage } from 'app/pages/not-found-page'
// import { usePost } from 'api/hooks/use-post'
import { useQueryClient } from '@tanstack/react-query'
import { useCreatePost } from 'api/hooks/use-create-post'
import { usePosts } from 'api/hooks/use-posts'
// import { useEffect } from 'react'

export const BlogPage = () => {
  const queryClient = useQueryClient()
  const { data: posts, isLoading: postsLoading } = usePosts(true)
  // const { data: post, isLoading: postLoading } = usePost(1)
  const { mutate, isPending } = useCreatePost()

  // useEffect(() => {
  //   let headers = new Headers()
  //   const username = 'WebUser'
  //   const password = 'T@DMt7k}By~8'
  //   var credentials = btoa(username + ':' + password)
  //   var basicAuth = 'Basic ' + credentials

  //   headers.append('Content-Type', 'application/json')
  //   headers.append('Accept', 'application/json')
  //   headers.append('Authorization', basicAuth)
  //   headers.append('Origin', 'http://localhost:3000')

  //   fetch('http://185.233.116.158/Project1_copy/hs/Project1/list', {
  //     mode: 'no-cors',
  //     credentials: 'include',
  //     method: 'GET',
  //     headers: headers,
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  //     .catch((error) => console.log('Authorization failed: ' + error.message))
  // }, [])

  return (
    <div>
      <h1>Our news</h1>
      <button
        onClick={() => {
          queryClient.invalidateQueries({ queryKey: ['posts'] })
          queryClient.invalidateQueries({ queryKey: ['post'] })
        }}
      >
        Invalidate
      </button>
      <button
        onClick={() => {
          mutate({
            userId: 1,
            title: 'New title',
            body: 'New body',
          })
        }}
        disabled={isPending}
      >
        {isPending ? 'Loading...' : 'Create'}
      </button>
      <Link
        to="/posts/new"
        style={{ margin: '1rem 0', display: 'inline-block' }}
      >
        Add new post
      </Link>
      {postsLoading ? (
        <p>'Loading'</p>
      ) : posts?.length ? (
        posts.map((post) => (
          // <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.id}</li>
          // </Link>
        ))
      ) : (
        <NotFoundPage />
      )}

      {/* {postLoading ? (
        <p>'Loading'</p>
      ) : post ? (
        <p>{post.title}</p>
      ) : (
        <NotFoundPage />
      )} */}
    </div>
  )
}
