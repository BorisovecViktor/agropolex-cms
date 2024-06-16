import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from 'lib/hooks/use-auth'
import { PropsWithChildren } from 'react'

export const RequireAuth = ({ children }: PropsWithChildren) => {
  const location = useLocation()
  const auth = useAuth()

  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return <>{children}</>
}
