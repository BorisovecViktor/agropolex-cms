import { useParams } from 'react-router-dom'
import { useInfiniteQuery } from '@tanstack/react-query'
import { productService } from 'api/services'

type Props = {
  limit?: number
  search?: string
  filters?: Array<string>
}

export const useProducts = ({ limit, search, filters }: Props) => {
  const { category, subCategory } = useParams()
  const id = subCategory ?? (category || '')

  const { data, status, error, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['products', { id, search, filters }],
    queryFn: ({ pageParam }) =>
      productService.getProducts({
        id,
        page: pageParam,
        limit,
        search,
        filters,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.data.length ? allPages.length + 1 : undefined,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  })

  return {
    data,
    status,
    error,
    fetchNextPage,
    isFetching,
  }
}

// export const useProduct = (id: string) => {
//   const { data, isLoading, isSuccess, isError } = useQuery({
//     queryKey: ['product', id],
//     queryFn: () => productService.getProduct(id),
//     select: (data) => data.data,
//     enabled: !!id,
//     refetchOnWindowFocus: false,
//   })

//   useEffect(() => {
//     if (isSuccess) {
//       console.log('success')
//     }
//   }, [isSuccess])

//   useEffect(() => {
//     if (isError) {
//       console.log('error')
//     }
//   }, [isError])

//   return { data, isLoading, isSuccess, isError }
// }
