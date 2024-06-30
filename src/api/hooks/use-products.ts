import { useInfiniteQuery } from '@tanstack/react-query'
import { productService } from 'api/services'

export const useProducts = (category: string) => {
  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam }) => productService.getProduct(category, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.data.length ? allPages.length + 1 : undefined,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  })

  return { data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage }
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
