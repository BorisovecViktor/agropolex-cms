import { IconButton, Tooltip } from '@mui/material'
import { Row } from '@tanstack/react-table'
import { green } from '@mui/material/colors'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { IProduct } from 'api/types/product'

type Props = {
  row: Row<IProduct>
}

export const CartAction = ({ row }: Props) => (
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
