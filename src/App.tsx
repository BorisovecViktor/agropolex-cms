import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { HomePage } from 'app/pages/home-page'
import { About } from 'app/pages/about-page'
import { BlogPage } from 'app/pages/blog-page'
import { CreatePost } from 'app/pages/create-post'
import { EditPost } from 'app/pages/edit-post'
import { NotFoundPage } from 'app/pages/not-found-page'
import { LoginPage } from 'app/pages/login-page'
import { RegistrationPage } from 'app/pages/registration-page'
import { AppLayout } from 'layout/app-layout'
import { RequireAuth } from 'components/hoc/require-auth'
import { RequireNotAuth } from 'components/hoc/require-not-auth'
import { AuthLayout } from 'layout/auth-layout'

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
