import { Link } from 'react-router-dom'

type Props = Readonly<{
  isLoggedIn: boolean
  userType: 'user' | 'admin'
}>

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
  width: '300px',
}

export const Navbar = ({ isLoggedIn, userType }: Props) => {
  return (
    <nav className="navbar">
      <ul style={{ ...styles }}>
        {!isLoggedIn && (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </>
        )}
        {isLoggedIn && userType === 'admin' ? (
          <li className="nav-item">
            <Link to="/admin-dashboard" className="nav-link">
              Admin Dashboard
            </Link>
          </li>
        ) : (
          isLoggedIn && (
            <li className="nav-item">
              <Link to="/userDetails" className="nav-link">
                User Details
              </Link>
            </li>
          )
        )}

        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
