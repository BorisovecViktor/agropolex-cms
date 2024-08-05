import { Box } from '@mui/material'
import { useCategories } from 'api/hooks/use-categories'
import { ImageList } from 'components/image-list'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAIN_SPACING } from 'layout/app-layout'

export const HomePage = () => {
  const { data } = useCategories()

  return (
    <Box
      height={`calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - (2 * ${MAIN_SPACING}))`}
      overflow="auto"
    >
      {data && <ImageList data={data} />}
    </Box>
  )
}
