import { fetchUsers } from '../../src/api/api'

test('Carga usuarios desde JSON Server', async () => {
  const users = await fetchUsers()
  expect(users).toHaveLength(3)
  expect(users[0].name).toBe('John Doe')
})
