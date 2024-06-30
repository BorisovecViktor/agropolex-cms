import { Box, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { DeerIcon } from 'assets/icons'

export const NotFoundPage = () => (
  <Stack
    sx={{ height: '100%' }}
    spacing={{ xs: 2, sm: 2.25, lg: 4 }}
    alignItems="center"
    justifyContent="center"
  >
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={{
        width: { xs: 196, sm: 204, lg: 240 },
        height: { xs: 196, sm: 204, lg: 240 },
        background: 'rgba(204, 246, 232, 0.3)',
        borderRadius: '50%',
        flexShrink: 0,
      }}
    >
      <DeerIcon sx={{ fontSize: { xs: 64, lg: 88 } }} />
      <Box textAlign="center">
        <Typography variant="h5">404</Typography>
        <Typography variant="h6">Page not found</Typography>
      </Box>
    </Stack>
    <Stack spacing={{ xs: 3, lg: 4 }} alignItems="center">
      <Stack spacing={{ xs: 1.5, sm: 1, lg: 2 }} textAlign="center">
        <Typography variant="h4">Oh deer! Are you lost?</Typography>
        <Typography variant="h6">
          We searched high and low but couldn't find what you are looking for.
          Let's find a better place for you to be
        </Typography>
      </Stack>
      <Link to="/">
        <Button>Explore Agropolex</Button>
      </Link>
    </Stack>
  </Stack>
)
