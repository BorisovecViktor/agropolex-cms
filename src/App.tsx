import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { HomePage } from './pages/home-page'
import { About } from './pages/about-page'
import { BlogPage } from './pages/blog-page'
import { CreatePost } from './pages/create-post'
import { EditPost } from './pages/edit-post'
import { NotFoundPage } from './pages/not-found-page'
import { LoginPage } from './pages/login-page'
import { AppLayout } from './components/app-layout'
import { RequireAuth } from './hoc/require-auth'
import { RegistrationPage } from './pages/registration-page'
import { RequireNotAuth } from './hoc/require-not-auth'
import { AuthLayout } from './components/auth-layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />}>
          <Route path="contacts" element={<p>Our contact</p>} />
          <Route path="team" element={<p>Our team</p>} />
        </Route>
        <Route path="posts" element={<BlogPage />} />
        <Route path="posts/:id/edit" element={<EditPost />} />
        <Route
          path="posts/new"
          element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          }
        />
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
