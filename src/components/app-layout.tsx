import { PropsWithChildren } from 'react'
import { Navbar } from './navbar'

type Props = Readonly<{
  isLoggedIn: boolean
  userType: 'user' | 'admin'
}>

export const AppLayout = ({
  isLoggedIn,
  userType,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userType={userType} />
      {children}
      <span>footer</span>
    </>
  )
}
