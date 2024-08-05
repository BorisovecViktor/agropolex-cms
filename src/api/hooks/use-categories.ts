import { useQuery } from '@tanstack/react-query'
import { categoryService } from 'api/services'

export const useCategories = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryService.getCategories(),
    select: (data) => data.data,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  })

  return { data, isLoading, isSuccess, isError }
}
