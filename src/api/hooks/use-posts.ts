import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { postService } from 'api/services'

export const usePosts = (isEnabled: boolean) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => postService.getPosts(),
    select: (data) => data.data,
    enabled: isEnabled,
  })

  useEffect(() => {
    if (isSuccess) {
      console.log('success')
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      console.log('error')
    }
  }, [isError])

  return { data, isLoading, isSuccess, isError }
}
