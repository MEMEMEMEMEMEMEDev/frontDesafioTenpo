import { apiInstance } from '../../../shared/api/axiosInstance'
import { User } from '../domain/interfaces'

export async function fetchUsers(): Promise<User[]> {
  const response = await apiInstance.get('/users')
  return response.data
}

export async function fetchUser(id: string): Promise<User> {
  const response = await apiInstance.get(`/users/${id}`)
  return response.data
}
