import {
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { IProduct } from 'modules/product/type'
import { CartItemAmount } from 'modules/cart/cart-item-amount'
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

export const ProductCartItem = ({ cartItem }: Props) => {
  const { id, title } = cartItem

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row" width="25%" sx={cellOverflowStyles}>
        <Typography component="span">{title}</Typography>
      </TableCell>
      <TableCell component="th" scope="row" width="20%" sx={cellOverflowStyles}>
        <Typography component="span">{`${title} ${id}`}</Typography>
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        align="center"
        width="5%"
        sx={{ color: green[500] }}
      >
        <Typography>Yes</Typography>
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        align="center"
        width="30%"
        sx={{ p: 0 }}
      >
        <CartItemAmount />
      </TableCell>
      <TableCell component="th" scope="row" align="center" width="15%">
        <Typography>{`${id} UAH`}</Typography>
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        align="center"
        sx={{ p: 0 }}
        width="5%"
      >
        <Tooltip title="Remove from cart" arrow placement="left">
          <IconButton
            aria-label="Remove from cart"
            onClick={(e) => {
              e.stopPropagation()
              console.log(`${title} -> successfully removed from cart`)
            }}
            sx={{
              '&:hover': { backgroundColor: red[100] },
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
        </Tooltip>
      </TableCell>
    </TableRow>
  )
}
