import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  isLoggedIn: boolean
}

export const ProtectedRoute = ({ isLoggedIn }: Props) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="login" />
}
