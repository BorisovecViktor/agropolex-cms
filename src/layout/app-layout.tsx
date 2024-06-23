import { Outlet } from 'react-router-dom'
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
import PersonIcon from '@mui/icons-material/Person'

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
}

export const AppLayout = () => {
  const theme = useTheme()
  const mdUpMatch = useMediaQuery(theme.breakpoints.up('md'))
  const [anchorSettings, setAnchorSettings] = useState<null | HTMLElement>(null)

  const handleOpenSettings = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorSettings(event.currentTarget)
  }

  const handleCloseSettings = () => {
    setAnchorSettings(null)
  }

  return (
    <Stack sx={{ height: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: '68px' }}>
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
              fontWeight={600}
              style={{
                display: mdUpMatch ? 'flex' : 'none',
                marginRight: '30px',
                ...logoStyles,
              }}
            >
              AGROPOLEX
            </CustomLink>
            <Box sx={{ flexGrow: 1 }}>
              <Navbar />
            </Box>
            {/* Settings ------------------------------------------ */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenSettings}>
                  <PersonIcon
                    color="primary"
                    sx={{
                      fontSize: '25px',
                    }}
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
                  <MenuItem key={title} onClick={handleCloseSettings}>
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
        sx={{ height: '100%', overflow: 'hidden', py: 1 }}
      >
        <Outlet />
      </Container>

      <Stack
        component="footer"
        direction="row"
        alignItems="center"
        height="68px"
        sx={{
          borderTop: `1px solid ${grey[300]}`,
          backgroundColor: 'white',
        }}
      >
        <Container maxWidth="xl">&copy; Agropolex 2024</Container>
      </Stack>
    </Stack>
  )
}
