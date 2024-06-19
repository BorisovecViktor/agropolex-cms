import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { categoryService } from 'api/services'

export const usePost = (id: number) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => categoryService.getPost(id),
    select: (data) => data.data,
    enabled: !!id,
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
