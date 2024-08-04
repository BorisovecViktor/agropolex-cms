import { Stack, Typography } from '@mui/material'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAIN_SPACING } from 'layout/app-layout'

type Props = {
  errorMessage: string
}

export const ErrorMessage = ({ errorMessage }: Props) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - (2 * ${MAIN_SPACING}))`}
    >
      <Typography>Error: {errorMessage}</Typography>
    </Stack>
  )
}
