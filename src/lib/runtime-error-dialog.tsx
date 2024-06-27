import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FallbackProps } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'

export const RuntimeErrorDialog = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const navigate = useNavigate()

  return (
    <Dialog open>
      <DialogTitle>
        Something went wrong{' '}
        <span aria-label="bug" role="img">
          🐞
        </span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          It may be a server error or a client-side bug. <br />
          Please report the problem to the development team.
          <Typography color="error">
            <pre style={{ whiteSpace: 'pre-wrap' }}>{error.message}</pre>
          </Typography>
          <CopyToClipboard text={error.message}>
            <Button>Copy error to clipboard</Button>
          </CopyToClipboard>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            navigate(0)
          }}
        >
          Refresh this page
        </Button>
        <Button
          color="primary"
          onClick={() => {
            navigate('/', { replace: true })
            resetErrorBoundary()
          }}
        >
          Go to main page
        </Button>
      </DialogActions>
    </Dialog>
  )
}
