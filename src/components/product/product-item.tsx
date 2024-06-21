import { IconButton, TableCell, TableRow } from '@mui/material'
import { IProduct } from './type'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { green } from '@mui/material/colors'

type Props = {
  product: IProduct
  innerRef?: (instance: HTMLTableRowElement) => void
}
export const ProductItem = ({ product, innerRef, ...props }: Props) => {
  return (
    <TableRow
      key={product.id}
      ref={innerRef}
      onClick={() => console.log(`Card item id is ${product.id}`)}
      sx={{ cursor: 'pointer' }}
      {...props}
    >
      <TableCell component="th" scope="row">
        {product.title}
      </TableCell>
      <TableCell component="th" scope="row">
        {`${product.title} ${product.id}`}
      </TableCell>
      <TableCell component="th" scope="row" align="center">
        {product.userId}
      </TableCell>
      <TableCell component="th" scope="row" align="center">
        Yes
      </TableCell>
      <TableCell component="th" scope="row" align="center">
        {product.id}
      </TableCell>
      <TableCell component="th" scope="row" align="center" sx={{ p: 0 }}>
        <IconButton
          aria-label="Add to cart"
          onClick={(e) => {
            e.stopPropagation()
            console.log(`${product.title} -> successfully added to cart`)
          }}
          sx={{
            '&:hover': { backgroundColor: green[50] },
            '&:hover svg': { color: green[700] },
          }}
        >
          <AddShoppingCartIcon
            sx={{
              fontSize: '20px',
              color: green[300],
            }}
          />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
