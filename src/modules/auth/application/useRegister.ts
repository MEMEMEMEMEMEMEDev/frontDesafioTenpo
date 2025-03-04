import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../infrastructure/authApiService'

interface UseRegisterReturn {
  handleRegister: (email: string, password: string) => Promise<void>
  isLoading: boolean
  error: string | null
  isSuccess: boolean
}

export const useRegister = (): UseRegisterReturn => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    setIsSuccess(false)

    try {
      await registerUser(email, password)
      setIsSuccess(true)

      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } catch (err) {
      setError('Error en el registro. Inténtalo de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return { handleRegister, isLoading, error, isSuccess }
}
