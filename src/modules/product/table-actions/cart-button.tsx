import { IconButton, Tooltip } from '@mui/material'
import { Row } from '@tanstack/react-table'
import { IProduct } from '../type'
import { green } from '@mui/material/colors'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'

type Props = {
  row: Row<IProduct>
}

export const CartButton = ({ row }: Props) => (
  <Tooltip
    title={
      // amount < minPurchaseAmount
      true ? 'Add at least one item' : 'Add to cart'
    }
    arrow
    placement="left"
  >
    <IconButton
      aria-label="Add to cart"
      size="small"
      onClick={() =>
        console.log(`${row.original.title} -> successfully added to cart`)
      }
      // disabled={amount < minPurchaseAmount}
      sx={{
        '&:hover': { backgroundColor: green[100] },
        '&:hover svg': { color: green[700] },
        '&:disabled svg': { color: green[200] },
      }}
    >
      <AddShoppingCartOutlinedIcon
        sx={{
          fontSize: '18px',
          color: green[500],
        }}
      />
    </IconButton>
  </Tooltip>
)