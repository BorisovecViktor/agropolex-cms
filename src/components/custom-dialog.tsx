import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import CloseIcon from '@mui/icons-material/Close'
import { PropsWithChildren } from 'react'

type Props = {
  title: string
  aria: string
  isOpen: boolean
  onClose: () => void
}

export const CustomDialog = ({
  title,
  aria,
  isOpen,
  onClose,
  children,
}: PropsWithChildren & Props) => (
  <Dialog open={isOpen} onClose={onClose} aria-describedby={aria}>
    <DialogTitle
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <IconButton
        onClick={onClose}
        sx={{ color: grey[500] }}
        aria-label="Close button"
      >
        <CloseIcon sx={{ fontSize: '18px' }} />
      </IconButton>
    </DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
)
