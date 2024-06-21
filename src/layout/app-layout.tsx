import { Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import avatar from 'assets/icons/avatar.png'
import { useState } from 'react'
import { CustomLink } from 'components/custom-link'
import { useMediaQuery, useTheme } from '@mui/material'
import { Navbar } from 'components/nav-bar'
import { blue } from '@mui/material/colors'

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
  fontWeight: 700,
  letterSpacing: '.2rem',
  color: blue[800],
  textTransform: 'uppercase',
  textDecoration: 'none',
} as const

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
    <>
      <AppBar position="static" sx={{ mb: 2, backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
            <CustomLink
              to="/"
              style={{
                display: mdUpMatch ? 'none' : 'flex',
                flexGrow: 1,
                ...logoStyles,
              }}
            >
              agropolex
            </CustomLink>

            {/* Desktop ------------------------------------ */}
            <CustomLink
              to="/"
              style={{
                display: mdUpMatch ? 'flex' : 'none',
                marginRight: '30px',
                ...logoStyles,
              }}
            >
              agropolex
            </CustomLink>
            <Box sx={{ flexGrow: 1 }}>
              <Navbar />
            </Box>
            {/* Settings ------------------------------------------ */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenSettings} sx={{ p: 0 }}>
                  <Avatar alt="Avatar" src={avatar} />
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
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </main>

      {/* <footer>&copy; Agropolex 2024</footer> */}
    </>
  )
}
