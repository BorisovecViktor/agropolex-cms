import toast from 'react-hot-toast'
import { AlertErrorIcon } from 'assets/icons/alert/error'
import { AlertSuccessIcon } from 'assets/icons/alert/success'
import { green, red } from '@mui/material/colors'

export const toasterProps = {
  position: 'bottom-right',
  toastOptions: {
    success: {
      icon: <AlertSuccessIcon />,
      style: {
        background:
          'linear-gradient(0deg, rgba(74, 195, 152, 0.05), rgba(74, 195, 152, 0.05)), #FFFFFF',
        borderColor: green[500],
        color: green[500],
        fontWeight: 600,
      },
    },
    error: {
      icon: <AlertErrorIcon />,
      style: {
        background:
          'linear-gradient(0deg, rgba(252, 96, 91, 0.05), rgba(252, 96, 91, 0.05)), #FFFFFF',
        borderColor: red[500],
        color: red[500],
        fontWeight: 600,
      },
    },
    style: {
      border: '1px solid',
      borderRadius: '6px',
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
      padding: '5px 16px',
    },
  },
} as const

export const toastError = toast.error
export const toastSuccess = toast.success
