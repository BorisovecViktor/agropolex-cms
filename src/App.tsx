import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import {
  RegistrationPage,
  LoginPage,
  ProductsPage,
  ProductPage,
  HomePage,
  // BlogPage,
  NotFoundPage,
  CartPage,
  ProfilePage,
} from 'app/pages'
import { AppLayout } from 'layout/app-layout'
// import { RequireAuth } from 'components/hoc/require-auth'
import { RequireNotAuth } from 'components/hoc/require-not-auth'
import { AuthLayout } from 'layout/auth-layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="categories/:category/:subCategory?"
          element={<ProductsPage />}
        />
        <Route path="scu/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="profile" element={<ProfilePage />} />
        {/* <Route
          path="posts/new"
          element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          }
        /> */}
        <Route
          path="login"
          element={
            <RequireNotAuth>
              <LoginPage />
            </RequireNotAuth>
          }
        />
        <Route
          path="registration"
          element={
            <RequireNotAuth>
              <RegistrationPage />
            </RequireNotAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>,
  ),
)

export const App = () => {
  return <RouterProvider router={router} />
}
