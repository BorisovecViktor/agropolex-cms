import { useNavigate, useOutlet } from 'react-router-dom'
import { AuthProvider } from 'lib/hooks/use-auth'
import globalRouter from 'global-router'

export const AuthLayout = () => {
  const outlet = useOutlet()
  const navigate = useNavigate()

  globalRouter.navigate = navigate

  return <AuthProvider>{outlet}</AuthProvider>
}
