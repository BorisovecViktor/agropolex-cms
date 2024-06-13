import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export const LoginPage = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'

  const handleLogin = async (event: any) => {
    event.preventDefault()

    const form = event.target
    const user = form.username.value
    if (auth) {
      await auth.login(
        {
          userId: 1,
          userName: user,
          accessToken: 'accessToken',
          refreshToken: 'refreshToken',
        },
        () => console.log('Success sign in'),
      )

      navigate(fromPage, { replace: true })
    }
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
