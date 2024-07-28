import { ChangeEvent, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Filters } from './filters'
import { ProductList } from './product-list'
import { ProductCartList } from './product-cart'
import { MAIN_SPACING } from 'layout/app-layout'
import { useFilters } from 'api/hooks/use-filters'
import { useProducts } from 'api/hooks/use-products'
import { ProductSearch } from './product-search'
import { ErrorMessage } from 'components/error-message'

export const ProductContainer = () => {
  const [search, setSearch] = useState<string>('')
  const [filters, setFilters] = useState<Array<string>>([])
  const params = {
    search,
    filters,
  }
  const {
    data: filtersData,
    status: filtersStatus,
    error: filtersError,
  } = useFilters()
  const {
    data: productsData,
    status: productsStatus,
    error: productsError,
    fetchNextPage,
    isFetching,
  } = useProducts(params)
  const {
    data: productsCartData,
    status: productsCartStatus,
    error: productsCartError,
  } = useProducts({})

  if (filtersStatus === 'error' && filtersError) {
    return <ErrorMessage errorMessage={filtersError.message} />
  }

  if (productsStatus === 'error' && productsError) {
    return <ErrorMessage errorMessage={productsError.message} />
  }

  if (productsCartStatus === 'error' && productsCartError) {
    return <ErrorMessage errorMessage={productsCartError.message} />
  }

  const onChangeSearch = (search: string) => {
    setSearch(search)
  }

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    if (filters.includes(e.target.id)) {
      setFilters(filters.filter((item) => item !== e.target.id))
    } else {
      setFilters((prev) => [...prev, e.target.id])
    }
  }

  return (
    <Box display="grid" gap={MAIN_SPACING} gridTemplateColumns="20% 80%">
      <Filters data={filtersData} onChange={onChangeFilter} />
      <Stack spacing={MAIN_SPACING}>
        <Box width="400px">
          <ProductSearch onChange={onChangeSearch} />
        </Box>
        <ProductList
          data={productsData}
          onFetchNextPage={fetchNextPage}
          isFetching={isFetching}
          status={productsStatus}
        />
        <ProductCartList data={productsCartData} />
      </Stack>
    </Box>
  )
}
