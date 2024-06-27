import {
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { IProduct } from 'modules/product/type'
import { CartItemAmount } from 'components/cart'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import { blue, red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'

const cellOverflowStyles = {
  maxWidth: '800px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

type Props = {
  cartItem: IProduct
}

export const CartItem = ({ cartItem }: Props) => {
  const { id, title } = cartItem
  const minAmount = 1
  const [amount, setAmount] = useState<number>(minAmount)

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row" width="25%" sx={cellOverflowStyles}>
        <Typography component="span">{title}</Typography>
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        align="center"
        width="25%"
        sx={{ p: 0 }}
      >
        <CartItemAmount
          amount={amount}
          onAmount={setAmount}
          minAmount={minAmount}
        />
      </TableCell>
      <TableCell component="th" scope="row" align="center" width="25%">
        <Typography>{`${id} UAH`}</Typography>
      </TableCell>
      <TableCell component="th" scope="row" sx={{ p: 0 }} width="25%">
        <Stack direction="row" justifyContent="center">
          <Tooltip title="Remove from cart" arrow placement="left">
            <IconButton
              aria-label="Remove from cart"
              size="small"
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
                  fontSize: '18px',
                  color: red[500],
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to favorite" arrow placement="right">
            <IconButton
              aria-label="Add to favorite"
              size="small"
              onClick={(e) => {
                e.stopPropagation()
                console.log(`${title} -> successfully add to favorite`)
              }}
              sx={{
                '&:hover': { backgroundColor: blue[100] },
                '&:hover svg': { color: blue[700] },
              }}
            >
              <FavoriteIcon
                sx={{
                  fontSize: '18px',
                  color: blue[500],
                }}
              />
            </IconButton>
          </Tooltip>
        </Stack>
      </TableCell>
    </TableRow>
  )
}
