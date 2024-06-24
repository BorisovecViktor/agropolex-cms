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
  const { id, title, userId } = productItem

  return (
    <TableRow
      key={id}
      ref={innerRef}
      onClick={() => navigate(`/product/${id}`)}
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
      <TableCell component="th" scope="row" align="center" width="30%">
        <Typography>{userId}</Typography>
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
        <Tooltip title="Add to cart" arrow placement="left">
          <IconButton
            aria-label="Add to cart"
            onClick={(e) => {
              e.stopPropagation()
              console.log(`${title} -> successfully added to cart`)
            }}
            sx={{
              '&:hover': { backgroundColor: green[100] },
              '&:hover svg': { color: green[700] },
            }}
          >
            <AddShoppingCartIcon
              sx={{
                fontSize: '20px',
                color: green[500],
              }}
            />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  )
}
