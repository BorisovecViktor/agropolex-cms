import { useQuery } from '@tanstack/react-query'
import { filterService } from 'api/services'
import { useParams } from 'react-router-dom'

export const useFilters = () => {
  const { category, subCategory } = useParams()
  const params = subCategory ?? (category || '')

  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: ['filters', params],
    queryFn: () => {
      if (category) {
        return filterService.getFilters(params)
      }
    },
    select: (data) => data?.data,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  })

  return { data, isLoading, isSuccess, isError, refetch }
}
