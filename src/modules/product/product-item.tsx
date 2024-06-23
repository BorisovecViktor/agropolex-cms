import { IconButton, TableCell, TableRow, Typography } from '@mui/material'
import { IProduct } from './type'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { green } from '@mui/material/colors'
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
      sx={{ cursor: 'pointer' }}
      {...props}
    >
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
      <TableCell component="th" scope="row" align="center" width="20%">
        <Typography>{userId}</Typography>
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
            console.log(`${title} -> successfully added to cart`)
          }}
          sx={{
            '&:hover': { backgroundColor: green[50] },
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
      </TableCell>
    </TableRow>
  )
}
