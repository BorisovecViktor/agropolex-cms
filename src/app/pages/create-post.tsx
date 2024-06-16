import { useNavigate } from 'react-router-dom'
import { useAuth } from 'lib/hooks/use-auth'

export const CreatePost = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleLogout = () => {
    if (auth) {
      auth.logout(() => console.log('Success sign out'))

      navigate('/', { replace: true })
    }
  }

  return (
    <div>
      <h1>Create a post</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}
