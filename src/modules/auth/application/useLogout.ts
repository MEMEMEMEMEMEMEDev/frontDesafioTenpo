import { useState } from 'react'
import { authInstance } from '../../../shared/api/axiosInstance'

export function useLogout() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      await authInstance.post('/auth/logout')
      localStorage.removeItem('accessToken')
      window.location.href = '/login'
    } catch (err) {
      setError('Error al cerrar sesión.')
    } finally {
      setIsLoading(false)
    }
  }

  return { handleLogout, isLoading, error }
}
