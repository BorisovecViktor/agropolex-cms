import { IconButton, Tooltip } from '@mui/material'
import { blue } from '@mui/material/colors'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Row } from '@tanstack/react-table'
import { IProduct } from 'api/types/product'

type Props = {
  row: Row<IProduct>
}

export const FavoriteButton = ({ row }: Props) => (
  <Tooltip title="Add to favorite" arrow placement="right">
    <IconButton
      aria-label="Add to favorite"
      size="small"
      onClick={(e) => {
        e.stopPropagation()
        console.log(`${row.original.title} -> successfully add to favorite`)
      }}
      sx={{
        '&:hover': { backgroundColor: blue[100] },
        '&:hover svg': { color: blue[700] },
      }}
    >
      <FavoriteBorderOutlinedIcon
        sx={{
          fontSize: '18px',
          color: blue[500],
        }}
      />
    </IconButton>
  </Tooltip>
)
