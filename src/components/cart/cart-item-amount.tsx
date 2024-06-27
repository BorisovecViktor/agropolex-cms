import { IconButton, Stack, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { grey } from '@mui/material/colors'
import { ChangeEvent, memo } from 'react'

type Props = {
  amount: number
  onAmount: (amount: number) => void
  minAmount: number
  buttonColor?: string
}

export const CartItemAmount = memo(
  ({ amount, onAmount, minAmount, buttonColor }: Props) => {
    const buttonStyles = {
      '&:hover': { backgroundColor: buttonColor ?? grey[200] },
      '&:hover svg': { color: grey[700] },
    }
    const iconStyles = {
      fontSize: '20px',
      color: grey[500],
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) >= minAmount) {
        onAmount(Math.max(Number(e.target.value), minAmount))
      }
    }

    const handleAddItem = () => {
      onAmount(amount + 1)
    }

    const handleRemoveItem = () => {
      onAmount(amount - 1)
    }

    return (
      <Stack
        direction="row"
        onClick={(e) => e.stopPropagation()}
        sx={{ display: 'inline-flex', alignItems: 'center' }}
      >
        <IconButton
          aria-label="Remove from cart"
          size="small"
          onClick={handleRemoveItem}
          sx={{ ...buttonStyles, mr: 1 }}
          disabled={amount === minAmount}
        >
          <RemoveIcon sx={iconStyles} />
        </IconButton>
        <TextField
          onChange={handleChange}
          value={amount}
          inputProps={{ style: { padding: '4px', textAlign: 'center' } }}
          sx={{ width: '70px' }}
        />
        <IconButton
          aria-label="Add to cart"
          size="small"
          onClick={handleAddItem}
          sx={{ ...buttonStyles, ml: 1 }}
          disabled={amount === 10000}
        >
          <AddIcon sx={iconStyles} />
        </IconButton>
      </Stack>
    )
  },
)
