import { createTheme } from '@mui/material/styles'
import { breakpointsTheme } from './breakpoints'
import { palette } from './palette'
import { typography } from './typography'
import { grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: palette.background,
    },
  },
  shape: {
    borderRadius: 6,
  },
  breakpoints: breakpointsTheme.breakpoints,
  typography,
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': { border: 0 },
          '&:nth-of-type(even)': {
            backgroundColor: grey[50],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&.MuiTableCell-head': {
            backgroundColor: grey[400],
          },
        },
      },
    },
  },
})

export { theme }
