import { authInstance } from '../../../shared/api/axiosInstance'
import { AuthResponse } from '../domain/interfaces'

export async function registerUser(
  email: string,
  password: string,
): Promise<any> {
  try {
    const response = await authInstance.post('/auth/register', {
      email,
      password,
    })
    return response.data
  } catch (error) {
    console.error('Error registrando usuario =>', error)
    throw error
  }
}

export async function loginUser(
  email: string,
  password: string,
): Promise<AuthResponse> {
  try {
    const response = await authInstance.post('/auth/login', { email, password })

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

export async function getProfile() {
  try {
    const response = await authInstance.get('/users/profile')
    return response.data
  } catch (error) {
    console.error('Error en getProfile =>', error)
    throw error
  }
}

export async function logoutUser(): Promise<void> {
  try {
    await authInstance.post('/auth/logout')
    localStorage.removeItem('accessToken')
  } catch (error) {
    console.error('Error cerrando sesión =>', error)
    throw error
  }
}
