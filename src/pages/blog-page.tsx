import { Link } from 'react-router-dom'
import { NotFoundPage } from './not-found-page'
import { usePosts } from '../api/hooks/use-posts'
import { usePost } from '../api/hooks/use-post'
import { useQueryClient } from '@tanstack/react-query'
import { useCreatePost } from '../api/hooks/use-create-post'

export const BlogPage = () => {
  const queryClient = useQueryClient()
  const { data: posts, isLoading: postsLoading } = usePosts(true)
  const { data: post, isLoading: postLoading } = usePost(1)
  const { mutate, isPending } = useCreatePost()

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
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      ) : (
        <NotFoundPage />
      )}

      {postLoading ? (
        <p>'Loading'</p>
      ) : post ? (
        <p>{post.title}</p>
      ) : (
        <NotFoundPage />
      )}
    </div>
  )
}
