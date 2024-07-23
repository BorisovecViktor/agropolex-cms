import { IconButton, Tooltip } from '@mui/material'
import { red } from '@mui/material/colors'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined'
import { Row } from '@tanstack/react-table'
import { IProduct } from 'api/types/product'

type Props = {
  row: Row<IProduct>
}

export const RemoveButton = ({ row }: Props) => (
  <Tooltip title="Remove from cart" arrow placement="left">
    <IconButton
      aria-label="Remove from cart"
      size="small"
      onClick={(e) => {
        e.stopPropagation()
        console.log(`${row.original.title} -> successfully removed from cart`)
      }}
      sx={{
        '&:hover': { backgroundColor: red[100] },
        '&:hover svg': { color: red[700] },
      }}
    >
      <RemoveShoppingCartOutlinedIcon
        sx={{
          fontSize: '18px',
          color: red[500],
        }}
      />
    </IconButton>
  </Tooltip>
)
