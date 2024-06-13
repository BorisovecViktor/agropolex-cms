import { PropsWithChildren, createContext, useContext, useMemo } from 'react'
import { useLocalStorage } from './use-local-storage'

export type IUser = {
  userId: number
  userName: string
  accessToken: string
  refreshToken: string
}

export type IAuthContext = {
  user: IUser
  login: (data: IUser, cb: () => void) => Promise<void>
  logout: (cb: () => void) => void
}

const AuthContext = createContext<IAuthContext | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage('user', null)

  const login = async (data: IUser, cb: () => void) => {
    setUser(data)
    cb()
  }

  const logout = (cb: () => void) => {
    setUser(null)
    cb()
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
