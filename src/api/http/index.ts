import axios from 'axios'
import { IUser } from '../../hooks/use-auth'

export const API_URL = 'https://jsonplaceholder.typicode.com'
export const USER_KEY = 'user'

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

$api.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem(USER_KEY)

    if (user) {
      const userData: IUser = JSON.parse(user)

      if (userData.accessToken) {
        config.headers['Authorization'] = `Bearer ${userData.accessToken}`
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

$api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const user = localStorage.getItem(USER_KEY)

        if (user) {
          const userData: IUser = JSON.parse(user)

          if (userData.refreshToken) {
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
        console.error('Token refresh failed:', refreshError)
        localStorage.removeItem(USER_KEY)
        window.location.href = '/login'

        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)
