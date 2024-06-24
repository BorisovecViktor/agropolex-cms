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
        id: 'balance',
        label: 'Balance',
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
    <TableContainer component={Paper} sx={{ maxHeight: '60vh' }}>
      <Table stickyHeader aria-label="products table" sx={{ minWidth: 650 }}>
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
          {isFetchingNextPage && (
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
                sx={{
                  p: 1,
                  color: grey[500],
                }}
              >
                <CircularProgress
                  color="inherit"
                  size={37}
                  sx={{ verticalAlign: 'middle' }}
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
