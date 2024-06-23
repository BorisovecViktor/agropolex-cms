import { Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { blue } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'

export const CartNavItem = () => {
  const navigate = useNavigate()
  const notificationsLabel = (count: number) => {
    if (count === 0) {
      return 'Cart is empty'
    }
    if (count > 99) {
      return 'More than 99 products'
    }
    return `${count} products`
  }

  return (
    <Badge badgeContent={10} color="primary">
      <IconButton
        aria-label={notificationsLabel(10)}
        onClick={() => navigate('/cart')}
        sx={{ '&:hover': { backgroundColor: blue[50] } }}
      >
        <ShoppingCartIcon color="primary" sx={{ fontSize: '25px' }} />
      </IconButton>
    </Badge>
  )
}
