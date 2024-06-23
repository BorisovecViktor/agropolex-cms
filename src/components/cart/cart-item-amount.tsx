import { IconButton, Stack, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { grey } from '@mui/material/colors'
import { ChangeEvent, useState } from 'react'

const buttonStyles = {
  '&:hover': { backgroundColor: grey[200] },
  '&:hover svg': { color: grey[700] },
}
const iconStyles = {
  fontSize: '20px',
  color: grey[500],
}

export const CartItemAmount = () => {
  const [amount, setAmount] = useState<number>(1)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Math.max(Number(e.target.value), 1))
  }

  const handleAddItem = () => {
    setAmount((prev) => prev + 1)
  }

  const handleRemoveItem = () => {
    setAmount((prev) => prev - 1)
  }

  return (
    <Stack
      direction="row"
      sx={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <IconButton
        aria-label="Remove from cart"
        onClick={(e) => {
          e.stopPropagation()
          handleRemoveItem()
        }}
        sx={{ ...buttonStyles, mr: 1 }}
        disabled={amount === 1}
      >
        <RemoveIcon sx={iconStyles} />
      </IconButton>
      <TextField
        size="small"
        onChange={handleChange}
        value={amount}
        inputProps={{ style: { textAlign: 'center' } }}
        sx={{ width: '70px' }}
      />
      <IconButton
        aria-label="Add to cart"
        onClick={(e) => {
          e.stopPropagation()
          handleAddItem()
        }}
        sx={{ ...buttonStyles, ml: 1 }}
        disabled={amount === 10000}
      >
        <AddIcon sx={iconStyles} />
      </IconButton>
    </Stack>
  )
}
