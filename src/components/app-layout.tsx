import { Outlet } from 'react-router-dom'
import { CustomLink } from './custom-link'

export const AppLayout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/registration">Registration</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">&copy; ReactRouter Tutorials 2022</footer>
    </>
  )
}
