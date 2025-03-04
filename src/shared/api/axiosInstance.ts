import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const AUTH_URL = import.meta.env.VITE_AUTH_URL
const SECURITY_URL = import.meta.env.VITE_SECURITY_URL

const apiInstance = axios.create({ baseURL: API_URL })
const authInstance = axios.create({ baseURL: AUTH_URL })
const securityInstance = axios.create({
  baseURL: SECURITY_URL,
  withCredentials: true,
})

const getAccessToken = () => localStorage.getItem('accessToken')

apiInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const newAccessToken = await refreshAccessToken()
        error.config.headers.Authorization = `Bearer ${newAccessToken}`
        return apiInstance.request(error.config)
      } catch (refreshError) {
        console.error('Error al refrescar el token, cerrando sesión...')
        handleLogout()
      }
    }
    return Promise.reject(error)
  },
)

const refreshAccessToken = async (): Promise<string> => {
  try {
    const response = await securityInstance.post('/auth/refresh')
    const newAccessToken = response.data.accessToken
    localStorage.setItem('accessToken', newAccessToken)
    return newAccessToken
  } catch (error) {
    throw new Error('No se pudo renovar el token')
  }
}

const handleLogout = async () => {
  try {
    await authInstance.post('/auth/logout')
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
  } finally {
    localStorage.removeItem('accessToken')
    window.location.href = '/login'
  }
}

export { apiInstance, authInstance, securityInstance, handleLogout }
