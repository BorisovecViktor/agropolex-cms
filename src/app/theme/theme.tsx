import { createTheme } from '@mui/material/styles'
import { breakpointsTheme } from './breakpoints'
import { palette } from './palette'
import { typography } from './typography'
import { blue, grey } from '@mui/material/colors'
import InterVariableTtf from 'assets/fonts/Inter-VariableFont.ttf'

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
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${InterVariableTtf}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiTextField: {
      defaultProps: {
        autoComplete: 'nope',
        fullWidth: true,
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& fieldset': {
            border: `1px solid ${grey[400]}`,
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              border: `1px solid ${grey[400]}`,
            },
            '&.Mui-focused fieldset': {
              border: `1px solid ${grey[400]}`,
            },
          },
        },
      },
    },
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
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          KhtmlUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
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
          borderBottom: 'none',
          '&.MuiTableCell-head': {
            backgroundColor: grey[400],
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          maxHeight: '300px',
          paddingTop: '1px',
          paddingBottom: '1px',
          overflowY: 'scroll',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: blue[400],
        },
        tooltip: {
          backgroundColor: blue[400],
          color: 'white',
        },
      },
    },
  },
})

export { theme }
