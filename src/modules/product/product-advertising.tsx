import { Box } from '@mui/material'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAIN_SPACING } from 'layout/app-layout'

export const ProductAdvertising = () => (
  <Box
    sx={{
      width: '15%',
      maxHeight: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - (2 * ${MAIN_SPACING}))`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 1,
      borderRadius: '6px',
      boxShadow:
        '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    }}
  >
    Advertising
  </Box>
)
