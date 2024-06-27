import {
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { IProduct } from './type'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { blue, green } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import { CartItemAmount } from 'components/cart'
import { useCallback, useState } from 'react'

const cellOverflowStyles = {
  maxWidth: '100px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

type Props = {
  productItem: IProduct
  innerRef?: (instance: HTMLTableRowElement) => void
}

export const ProductItem = ({ productItem, innerRef, ...props }: Props) => {
  const navigate = useNavigate()
  const { id, title } = productItem
  const minAmount = 0
  const minPurchaseAmount = 1
  const [amount, setAmount] = useState<number>(minAmount)

  const handleAmount = useCallback((amount: number) => {
    setAmount(amount)
  }, [])

  return (
    <TableRow
      key={id}
      ref={innerRef}
      onClick={() => navigate(`/products/${id}`)}
      sx={{ cursor: 'pointer', '&:hover': { backgroundColor: blue[50] } }}
      {...props}
    >
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
        <CartItemAmount
          amount={amount}
          onAmount={handleAmount}
          minAmount={minAmount}
          buttonColor={blue[200]}
        />
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
        <Tooltip
          title={
            amount < minPurchaseAmount ? 'Add at least one item' : 'Add to cart'
          }
          arrow
          placement="left"
        >
          <Typography component="span" onClick={(e) => e.stopPropagation()}>
            <IconButton
              aria-label="Add to cart"
              size="small"
              onClick={() =>
                console.log(`${title} -> successfully added to cart`)
              }
              disabled={amount < minPurchaseAmount}
              sx={{
                '&:hover': { backgroundColor: green[100] },
                '&:hover svg': { color: green[700] },
                '&:disabled svg': { color: green[200] },
              }}
            >
              <AddShoppingCartIcon
                sx={{
                  fontSize: '18px',
                  color: green[500],
                }}
              />
            </IconButton>
          </Typography>
        </Tooltip>
      </TableCell>
    </TableRow>
  )
}
