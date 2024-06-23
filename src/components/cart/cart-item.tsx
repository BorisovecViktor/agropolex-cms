import { IconButton, TableCell, TableRow, Typography } from '@mui/material'
import { IProduct } from 'modules/product/type'
import { CartItemAmount } from './cart-item-amount'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import { green, red } from '@mui/material/colors'

const cellOverflowStyles = {
  maxWidth: '100px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

type Props = {
  cartItem: IProduct
}

export const CartItem = ({ cartItem }: Props) => {
  const { id, title } = cartItem

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row" width="30%" sx={cellOverflowStyles}>
        <Typography component="span">{title}</Typography>
      </TableCell>
      <TableCell component="th" scope="row" width="20%" sx={cellOverflowStyles}>
        <Typography component="span">{`${title} ${id}`}</Typography>
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        align="center"
        width="10%"
        sx={{ color: green[500] }}
      >
        <Typography>Yes</Typography>
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        align="center"
        width="20%"
        sx={{ p: 0 }}
      >
        <CartItemAmount />
      </TableCell>
      <TableCell component="th" scope="row" align="center" width="10%">
        <Typography>{`${id} UAH`}</Typography>
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        align="center"
        sx={{ p: 0 }}
        width="10%"
      >
        <IconButton
          aria-label="Add to cart"
          onClick={(e) => {
            e.stopPropagation()
            console.log(`${title} -> successfully removed from cart`)
          }}
          sx={{
            '&:hover': { backgroundColor: red[50] },
            '&:hover svg': { color: red[700] },
          }}
        >
          <RemoveShoppingCartIcon
            sx={{
              fontSize: '20px',
              color: red[500],
            }}
          />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
