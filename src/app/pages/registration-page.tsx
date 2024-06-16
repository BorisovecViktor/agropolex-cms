import { useNavigate } from 'react-router-dom'
import { useAuth } from 'lib/hooks/use-auth'

export const RegistrationPage = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleRegistration = async (event: any) => {
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
        () => console.log('Success registration'),
      )

      navigate('/', { replace: true })
    }
  }

  return (
    <div>
      <h1>Registration page</h1>
      <form onSubmit={handleRegistration}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
