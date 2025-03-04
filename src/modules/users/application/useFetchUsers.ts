import { useState, useEffect } from 'react'
import { fetchUsers } from '../infrastructure/usersApiService'
import { User } from '../domain/interfaces'

interface UseFetchUsersReturn {
  users: User[] | null
  isLoading: boolean
  error: string | null
}

export const useFetchUsers = (): UseFetchUsersReturn => {
  const [users, setUsers] = useState<User[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers()
        setUsers(data)
      } catch (err) {
        setError('Error al obtener usuarios')
      } finally {
        setIsLoading(false)
      }
    }

    loadUsers()
  }, [])

  return { users, isLoading, error }
}
