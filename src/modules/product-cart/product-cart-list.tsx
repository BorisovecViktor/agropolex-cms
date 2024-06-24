import {
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
import { useMemo } from 'react'
import { ProductCartItem } from './product-cart-item'
import { useProducts } from 'api/hooks/use-products'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAIN_SPACING } from 'layout/app-layout'

export const ProductCartList = () => {
  const { data, status, error } = useProducts('')

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
        id: 'totalPrice',
        label: 'Total price',
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
    return null
  }

  if (status === 'error') {
    return <p>Error: {error?.message}</p>
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: `calc(40vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - (3 * ${MAIN_SPACING}))`,
      }}
    >
      <Table stickyHeader aria-label="cart table" sx={{ minWidth: 650 }}>
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
            data.map((product) => (
              <ProductCartItem key={product.id} cartItem={product} />
            )),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
