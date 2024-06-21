import { useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProductItem } from './product-item'
import { useProducts } from 'api/hooks/use-products'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Loading as LoadingIcon } from 'assets/icons/loading'
// import { useParams } from 'react-router-dom'

export const ProductList = () => {
  const { ref, inView } = useInView()
  // const { category } = useParams()
  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useProducts(
    // category
    '',
  )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  const headCells = useMemo(
    () => [
      {
        id: 'name',
        label: 'Name',
      },
      {
        id: 'manufacturer',
        label: 'Manufacturer',
      },
      {
        id: 'amount',
        label: 'Amount',
      },
      {
        id: 'availability',
        label: 'Availability',
      },
      {
        id: 'price',
        label: 'Price',
      },
      {
        id: 'actions',
        label: 'Actions',
      },
    ],
    [],
  )

  if (status === 'pending') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>Error: {error?.message}</p>
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '50vh' }}>
      <Table stickyHeader aria-label="products table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.pages.map(({ data }) =>
            data.map((product, index) => {
              if (data.length === index + 1) {
                return (
                  <ProductItem
                    key={product.id}
                    product={product}
                    innerRef={ref}
                  />
                )
              }

              return <ProductItem key={product.id} product={product} />
            }),
          )}
          {isFetchingNextPage && (
            <TableRow>
              <TableCell colSpan={5} align="center" sx={{ py: '17px' }}>
                <LoadingIcon color="grey" height="19px" width="100%" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
