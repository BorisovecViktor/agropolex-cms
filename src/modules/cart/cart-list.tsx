import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  Typography,
} from '@mui/material'
import { useProducts } from 'api/hooks/use-products'
import { CartItem } from './cart-item'
import { grey } from '@mui/material/colors'

export const CartList = () => {
  const { data, status, error } = useProducts('')

  if (status === 'pending') {
    return (
      <Box
        display="flex"
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          color: grey[500],
        }}
      >
        <CircularProgress color="inherit" size={37} />
      </Box>
    )
  }

  if (status === 'error') {
    return <p>Error: {error?.message}</p>
  }

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="cart table" sx={{ minWidth: 650 }}>
        <TableBody>
          {data?.pages.map(({ data }) =>
            data.map((product) => (
              <CartItem key={product.id} cartItem={product} />
            )),
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell component="th" scope="row" colSpan={4} sx={{ py: 2 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="right"
                spacing={2}
              >
                <Typography component="span" variant="h5" color="black">
                  Total: 1000 UAH
                </Typography>
                <Button variant="contained" color="success">
                  Checkout
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
