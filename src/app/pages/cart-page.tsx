import { Stack } from '@mui/material'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAIN_SPACING } from 'layout/app-layout'
import { CartList } from 'modules/cart'

export const CartPage = () => (
  <Stack
    height={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - (2 * ${MAIN_SPACING}))`}
  >
    <CartList />
  </Stack>
)
