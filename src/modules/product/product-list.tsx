import { useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProductItem } from './product-item'
import { useProducts } from 'api/hooks/use-products'
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'

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
        align: 'left',
      },
      {
        id: 'manufacturer',
        label: 'Manufacturer',
        align: 'left',
      },
      {
        id: 'availability',
        label: 'Availability',
        align: 'center',
      },
      {
        id: 'amount',
        label: 'Amount',
        align: 'center',
      },
      {
        id: 'price',
        label: 'Price',
        align: 'center',
      },
      {
        id: 'actions',
        label: 'Actions',
        align: 'center',
      },
    ],
    [],
  )

  if (status === 'pending') {
    return (
      <Box
        display="flex"
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        sx={{ color: grey[500] }}
      >
        <CircularProgress color="inherit" size={37} />
      </Box>
    )
  }

  if (status === 'error') {
    return <p>Error: {error?.message}</p>
  }

  return (
    <TableContainer component={Paper} sx={{ height: '50vh' }}>
      <Table
        stickyHeader
        size="small"
        aria-label="products table"
        sx={{ minWidth: 650, position: 'relative' }}
      >
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.align as TableCellProps['align']}
              >
                <Typography fontWeight={600}>{headCell.label}</Typography>
              </TableCell>
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
                    productItem={product}
                    innerRef={ref}
                  />
                )
              }

              return <ProductItem key={product.id} productItem={product} />
            }),
          )}
          <Box
            component="tr"
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: grey[100],
              opacity: isFetchingNextPage ? 0.4 : 0,
              zIndex: isFetchingNextPage ? 0 : -1,
            }}
          />
        </TableBody>
      </Table>
    </TableContainer>
  )
}
