import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
  <Stack alignItems="center" justifyContent="center" height="100%">
    <Typography variant="h1">
      This page doesn't exist. Go to <Link to="/">home</Link> page.
    </Typography>
  </Stack>
)
