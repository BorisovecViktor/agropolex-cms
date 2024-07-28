import { Stack } from '@mui/material'

type Props = {
  errorMessage: string
}

export const ErrorMessage = ({ errorMessage }: Props) => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      Error: {errorMessage}
    </Stack>
  )
}
