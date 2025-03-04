import { useState } from 'react'
import { authInstance } from '../../../shared/api/axiosInstance'

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await authInstance.post('/auth/login', {
        email,
        password,
      })
      const { accessToken } = response.data

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        window.location.href = '/users'
      }
    } catch (err) {
      setError('Credenciales incorrectas o error en el servidor.')
    } finally {
      setIsLoading(false)
    }
  }

  return { handleLogin, isLoading, error }
}
