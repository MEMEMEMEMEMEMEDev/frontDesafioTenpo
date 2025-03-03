import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const AUTH_URL = import.meta.env.VITE_AUTH_URL

const apiInstance = axios.create({
  baseURL: API_URL,
})

const authInstance = axios.create({
  baseURL: AUTH_URL,
})

export const fetchUsers = async () => {
  const response = await apiInstance.get('/users')
  return response.data
}

export const fetchUser = async (id: string) => {
  const response = await apiInstance.get(`/users/${id}`)
  return response.data
}

export const registerUser = async (email: string, password: string) => {
  console.log('Registrando un nuevo usuario:', email)
  try {
    const response = await authInstance.post(
      '/auth/register',
      { email, password },
      {
        withCredentials: true,
      },
    )
    console.log('Respuesta de registerUser =>', response.data)
    return response.data
  } catch (error) {
    console.error('Error registrando usuario =>', error)
    throw error
  }
}

export const loginUser = async (email: string, password: string) => {
  console.log('Iniciando sesión con:', email)
  try {
    const response = await authInstance.post(
      '/auth/login',
      { email, password },
      {
        withCredentials: true,
      },
    )
    console.log('Respuesta de loginUser =>', response.data)

    const { accessToken } = response.data
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken)
    }

    return response.data
  } catch (error) {
    console.error('Error en loginUser =>', error)
    throw error
  }
}

export const getProfile = async () => {
  console.log('Obteniendo perfil...')
  try {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      console.warn('No hay token, el usuario no está logueado.')
      return null
    }

    const response = await authInstance.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })

    console.log('Perfil recibido =>', response.data)
    return response.data
  } catch (error) {
    console.error('Error en getProfile =>', error)
    throw error
  }
}

export const logoutUser = async () => {
  console.log('Cerrando sesión...')
  try {
    await authInstance.post('/auth/logout', {}, { withCredentials: true })
    localStorage.removeItem('accessToken')
  } catch (error) {
    console.error('Error cerrando sesión =>', error)
    throw error
  }
}
