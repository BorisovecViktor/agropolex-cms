import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './components/login'
import { SignUp } from './components/signup'
import { UserDetails } from './components/user-details'
import { AdminHome } from './components/admin-home'
import { Cart } from './components/cart'
import { About } from './components/about'
import { ProtectedRoute } from './components/protected-route'
import { AppLayout } from './components/app-layout'

export const App = () => {
  const [isLoggedIn] = useState<boolean>(false)
  const [userType] = useState<'user' | 'admin'>('admin')

  return (
    <BrowserRouter>
      <AppLayout isLoggedIn={isLoggedIn} userType={userType}>
        <Routes>
          {/* unauthorized route */}
          {!isLoggedIn && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/" element={<Login />} />
            </>
          )}

          {/* ProtectedRoutes */}
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
            <Route path="/cart" element={<Cart />} />
            {userType !== 'admin' ? (
              <>
                <Route path="/" element={<Navigate to="/user-details" />} />
                <Route path="/user-details" element={<UserDetails />} />
                <Route path="/admin-dashboard" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/admin-dashboard" />} />
                <Route path="/admin-dashboard" element={<AdminHome />} />
                <Route path="/user-details" element={<Navigate to="/" />} />
              </>
            )}
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
