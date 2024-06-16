import { createTheme } from '@mui/material/styles'
import { breakpointsTheme } from './breakpoints'
import { palette } from './palette'
import { typography } from './typography'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: palette.milkyGray,
    },
    common: {
      black: palette.black,
      white: palette.white,
    },
    primary: {
      main: palette.black,
    },
  },
  shape: {
    borderRadius: 6,
  },
  breakpoints: breakpointsTheme.breakpoints,
  typography,
  components: {},
})

export { theme }
