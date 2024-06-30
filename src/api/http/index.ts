import axios, { AxiosError, AxiosResponse } from 'axios'
import { toastError } from 'components/toaster'
import globalRouter from 'global-router'
import { IUser } from 'lib/hooks/use-auth'

export const API_URL = process.env.REACT_APP_API_URL
export const USER_KEY = 'user'
const username = 'WebUser'
const password = 'T@DMt7k}By~8'

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username,
    password,
  },
})

// $api.interceptors.request.use(
//   (config) => {
//     const user = localStorage.getItem(USER_KEY)

//     if (user) {
//       const userData: IUser = JSON.parse(user)

//       if (userData?.accessToken) {
//         config.headers['Authorization'] = `Bearer ${userData.accessToken}`
//       }
//     }

//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

$api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const status = error.response ? error.response.status : null
    const originalRequest: any = error.config

    if (status === 404 && globalRouter.navigate) {
      globalRouter.navigate('/not-found')
    }

    if (status === 401 && !originalRequest._retry && globalRouter.navigate) {
      originalRequest._retry = true

      try {
        const user = localStorage.getItem(USER_KEY)

        if (user) {
          const userData: IUser = JSON.parse(user)

          if (userData?.refreshToken) {
            const response = await axios.post(`${API_URL}/refresh`, {
              refreshToken: userData.refreshToken,
            })
            const {
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            } = response.data

            localStorage.setItem(
              USER_KEY,
              JSON.stringify({
                ...userData,
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
              }),
            )
            $api.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${newAccessToken}`

            return $api(originalRequest)
          }
        }
      } catch (refreshError) {
        toastError(error.message)
        console.error('Token refresh failed:', refreshError)
        localStorage.removeItem(USER_KEY)
        globalRouter.navigate('/login')

        return Promise.reject(refreshError)
      }
    }

    if (status === 500) {
      toastError(error.message)

      return Promise.reject(error.response)
    }

    return Promise.reject(error)
  },
)
