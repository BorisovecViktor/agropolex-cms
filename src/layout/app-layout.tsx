import { Outlet, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { CustomLink } from 'components/custom-link'
import { Stack, useMediaQuery, useTheme } from '@mui/material'
import { Navbar } from 'components/nav-bar'
import { blue, grey } from '@mui/material/colors'
import { CartNavItem } from 'components/cart'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { ErrorBoundary } from 'react-error-boundary'
import { RuntimeErrorDialog } from 'lib/runtime-error-dialog'
import globalRouter from 'global-router'

export const MAIN_SPACING = '8px'
export const SEARCH_HEIGHT = '37px'
export const HEADER_HEIGHT = '68px'
export const FOOTER_HEIGHT = '68px'

const settings = [
  {
    title: 'Profile',
    to: '/profile',
  },
  {
    title: 'Logout',
    to: '/logout',
  },
]

const logoStyles = {
  fontSize: 28,
  letterSpacing: '.2rem',
  color: blue[800],
  textDecoration: 'none',
  fontWeight: 600,
  textShadow: `1px 1px 1px ${blue[700]}`,
}

export const AppLayout = () => {
  const theme = useTheme()
  const mdUpMatch = useMediaQuery(theme.breakpoints.up('md'))
  const [anchorSettings, setAnchorSettings] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  globalRouter.navigate = navigate

  const handleOpenSettings = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorSettings(event.currentTarget)
  }

  const handleCloseSettings = () => {
    setAnchorSettings(null)
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: HEADER_HEIGHT }}>
            {/* Mobile ------------------------------------------------ */}
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavigation}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorNavigation}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorNavigation)}
                onClose={handleCloseNavigation}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavigation}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
            {/* <CustomLink
              to="/"
              style={{
                display: mdUpMatch ? 'none' : 'flex',
                flexGrow: 1,
                ...logoStyles,
              }}
            >
              AGROPOLEX
            </CustomLink> */}

            {/* Desktop ------------------------------------ */}
            <CustomLink
              to="/"
              style={{
                display: mdUpMatch ? 'flex' : 'none',
                marginRight: '30px',
                ...logoStyles,
              }}
            >
              AGROPOLEX
            </CustomLink>

            <Navbar />

            {/* Settings ------------------------------------------ */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings" arrow placement="left">
                <IconButton
                  onClick={handleOpenSettings}
                  sx={{ '&:hover': { backgroundColor: blue[50] } }}
                >
                  <PersonOutlineOutlinedIcon
                    color="primary"
                    sx={{ fontSize: '25px' }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorSettings}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorSettings)}
                onClose={handleCloseSettings}
              >
                {settings.map(({ title, to }) => (
                  <MenuItem
                    key={title}
                    onClick={handleCloseSettings}
                    sx={{ '&:hover': { backgroundColor: blue[50] } }}
                  >
                    <CustomLink to={to}>{title}</CustomLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Cart --------------------------------------------- */}
            <CartNavItem />
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        component="main"
        maxWidth="xl"
        sx={{
          minHeight: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
          py: MAIN_SPACING,
        }}
      >
        <ErrorBoundary FallbackComponent={RuntimeErrorDialog}>
          <Outlet />
        </ErrorBoundary>
      </Container>

      <Stack
        component="footer"
        justifyContent="center"
        sx={{
          height: FOOTER_HEIGHT,
          borderTop: `1px solid ${grey[300]}`,
        }}
      >
        <Container maxWidth="xl">&copy; Agropolex 2024</Container>
      </Stack>
    </>
  )
}
