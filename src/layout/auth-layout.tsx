import { useOutlet } from 'react-router-dom'
import { AuthProvider } from 'lib/hooks/use-auth'

export const AuthLayout = () => {
  const outlet = useOutlet()

  return <AuthProvider>{outlet}</AuthProvider>
}
