import { Link } from 'react-router-dom'
import { NotFoundPage } from 'app/pages/not-found-page'
// import { usePost } from 'api/hooks/use-post'
import { useQueryClient } from '@tanstack/react-query'
// import { useCreatePost } from 'api/hooks/use-create-post'
import { useCategories } from 'api/hooks/use-categories'

export const BlogPage = () => {
  const queryClient = useQueryClient()
  const { data: categories, isLoading: postsLoading } = useCategories(true)
  // const { data: post, isLoading: postLoading } = usePost(1)
  // const { mutate, isPending } = useCreatePost()

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
      {/* <button
        onClick={() => {
          mutate({
            Category_ID: '1',
          })
        }}
        disabled={isPending}
      >
        {isPending ? 'Loading...' : 'Create'}
      </button> */}
      <Link
        to="/posts/new"
        style={{ margin: '1rem 0', display: 'inline-block' }}
      >
        Add new post
      </Link>
      {postsLoading ? (
        <p>'Loading'</p>
      ) : categories?.length ? (
        categories.map((category) => (
          <Link key={category.Category_ID} to={category.Category_ID}>
            <li key={category.Category_ID}>{category.Category_ID}</li>
          </Link>
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
