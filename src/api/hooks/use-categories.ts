import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { categoryService } from 'api/services'

export const useCategories = (isEnabled: boolean) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryService.getCategories(),
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
