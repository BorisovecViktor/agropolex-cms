import { DialogContentText, IconButton, Tooltip } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { blue } from '@mui/material/colors'
import { useBoolean } from 'lib/hooks/use-boolean'
import { CustomDialog } from 'components/custom-dialog'
import { Row } from '@tanstack/react-table'
import { IProduct } from 'api/types/product'

type Props = {
  row: Row<IProduct>
}

export const InfoAction = ({ row }: Props) => {
  const openInfo = useBoolean(false)

  return (
    <>
      <CustomDialog
        title={row.original.name}
        isOpen={openInfo.isTrue}
        onClose={openInfo.setFalse}
        aria="Info"
      >
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running Let Google help
          apps determine location. Let Google help apps determine location. This
          means sending anonymous location data to Google, even when no apps are
          running Let Google help apps determine location. Let Google help apps
          determine location. This means sending anonymous location data to
          Google, even when no apps are running Let Google help apps determine
          location. Let Google help apps determine location. This means sending
          anonymous location data to Google, even when no apps are running Let
          Google help apps determine location. Let Google help apps determine
          location. This means sending anonymous location data to Google, even
          when no apps are running Let Google help apps determine location. Let
          Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running Let Google help
          apps determine location. Let Google help apps determine location. This
          means sending anonymous location data to Google, even when no apps are
          running Let Google help apps determine location. Let Google help apps
          determine location. This means sending anonymous location data to
          Google, even when no apps are running Let Google help apps determine
          location. Let Google help apps determine location. This means sending
          anonymous location data to Google, even when no apps are running Let
          Google help apps determine location. Let Google help apps determine
          location. This means sending anonymous location data to Google, even
          when no apps are running Let Google help apps determine location. Let
          Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running Let Google help
          apps determine location. Let Google help apps determine location. This
          means sending anonymous location data to Google, even when no apps are
          running Let Google help apps determine location. Let Google help apps
          determine location. This means sending anonymous location data to
          Google, even when no apps are running Let Google help apps determine
          location. Let Google help apps determine location. This means sending
          anonymous location data to Google, even when no apps are running Let
          Google help apps determine location.
        </DialogContentText>
      </CustomDialog>
      <Tooltip title="Info" arrow>
        <IconButton
          aria-label="Info"
          size="small"
          onClick={() => {
            openInfo.setTrue()
          }}
          sx={{
            '&:hover': { backgroundColor: blue[100] },
            '&:hover svg': { color: blue[700] },
          }}
        >
          <InfoOutlinedIcon
            sx={{
              fontSize: '18px',
              color: blue[500],
            }}
          />
        </IconButton>
      </Tooltip>
    </>
  )
}
