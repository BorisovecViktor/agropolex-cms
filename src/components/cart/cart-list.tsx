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
import { CartItem } from './cart-item'
import { useProducts } from 'api/hooks/use-products'

export const CartList = () => {
  const { data } = useProducts('')

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

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '39%', mt: 1 }}>
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
              <CartItem key={product.id} cartItem={product} />
            )),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
