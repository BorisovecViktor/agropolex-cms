import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'

export const HomePage = () => {
  return (
    <div>
      <Typography variant="h1">Get started with React-Router 6</Typography>
      <Button variant="contained">Hello world</Button>
      <Icon color="primary">add_circle</Icon>
      <Typography component="p">Hello world</Typography>
    </div>
  )
}
