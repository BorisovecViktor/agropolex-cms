import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { PropsWithChildren } from 'react'

export const RequireNotAuth = ({ children }: PropsWithChildren) => {
  const auth = useAuth()

  if (auth?.user) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}
