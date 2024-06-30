import { IconButton, Stack, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { grey } from '@mui/material/colors'
import { ChangeEvent, Dispatch, SetStateAction, memo } from 'react'

type Props = {
  amount: number
  onAmount: Dispatch<SetStateAction<number>>
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

    const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) >= minAmount) {
        onAmount(Math.max(Number(e.target.value), minAmount))
      }
    }

    const handleIncreaseAmount = () => {
      onAmount(amount + 1)
    }

    const handleDecreaseAmount = () => {
      onAmount(amount - 1)
    }

    return (
      <Stack
        direction="row"
        onClick={(e) => e.stopPropagation()}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          height: '33px',
          px: 2,
        }}
      >
        <IconButton
          aria-label="Remove from cart"
          size="small"
          onClick={handleDecreaseAmount}
          sx={{ ...buttonStyles, mr: 1 }}
          disabled={amount === minAmount}
        >
          <RemoveIcon sx={iconStyles} />
        </IconButton>
        <TextField
          onChange={handleChangeAmount}
          value={amount}
          inputProps={{ style: { padding: '4px', textAlign: 'center' } }}
          sx={{ width: '70px' }}
        />
        <IconButton
          aria-label="Add to cart"
          size="small"
          onClick={handleIncreaseAmount}
          sx={{ ...buttonStyles, ml: 1 }}
          disabled={amount === 10000}
        >
          <AddIcon sx={iconStyles} />
        </IconButton>
      </Stack>
    )
  },
)
