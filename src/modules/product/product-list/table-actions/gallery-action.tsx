import { IconButton, Tooltip } from '@mui/material'
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined'
import { orange } from '@mui/material/colors'
import { useBoolean } from 'lib/hooks/use-boolean'
import { Row } from '@tanstack/react-table'
import { CustomDialog } from 'components/custom-dialog'
import { Carousel } from 'components/carousel'
import { IProduct } from 'api/types/product'

type Props = {
  row: Row<IProduct>
}

export const GalleryAction = ({ row }: Props) => {
  const openGallery = useBoolean(false)

  return (
    <>
      <CustomDialog
        title={row.original.title}
        isOpen={openGallery.isTrue}
        onClose={openGallery.setFalse}
        aria="Image gallery"
      >
        <Carousel withDescription />
      </CustomDialog>
      <Tooltip title="Image gallery" arrow>
        <IconButton
          aria-label="Image gallery"
          size="small"
          onClick={() => {
            openGallery.setTrue()
          }}
          sx={{
            '&:hover': { backgroundColor: orange[100] },
            '&:hover svg': { color: orange[700] },
          }}
        >
          <PhotoLibraryOutlinedIcon
            sx={{
              fontSize: '18px',
              color: orange[500],
            }}
          />
        </IconButton>
      </Tooltip>
    </>
  )
}
