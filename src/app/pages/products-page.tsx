import { Stack } from '@mui/material'
import { ProductCartList } from 'modules/product-cart'
import { ProductList } from 'modules/product'
import { Filters } from 'modules/filters'
import { MAIN_SPACING } from 'layout/app-layout'

export const ProductsPage = () => (
  <Stack direction="row" height="100%" spacing={1}>
    <Filters />
    <Stack
      flexGrow={1}
      width={`calc(80% - ${MAIN_SPACING})`}
      spacing={MAIN_SPACING}
    >
      <ProductList />
      <ProductCartList />
    </Stack>
  </Stack>
)
