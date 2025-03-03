import { useEffect, useState } from 'react'
import { fetchUsers, registerUser, loginUser, logoutUser } from '../../api/api'
import { Button } from '../../shared/components/Button'
import { Title } from '../../shared/components/Title/Title'
import { HomeWrapper } from './HomePage.styles'
import { Loader } from '../../shared/components/Loader/Loader'

export function HomePage() {
  const [users, setUsers] = useState<any[]>([])
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers().then((res) => {
      setUsers(res)
    })
  }, [])

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const handleRegister = async () => {
    console.log('Intentando registrar al usuario...')
    try {
      const res = await registerUser('test@example.com', '123456')
      console.log('Usuario registrado =>', res)
    } catch (error) {
      console.error('Error registrando usuario =>', error)
    }
  }

  const handleLogin = async () => {
    console.log('Intentando loguear al usuario...')
    try {
      const data = await loginUser('test@example.com', '123456')
      console.log('Resultado login =>', data)
      const newToken = localStorage.getItem('accessToken')
      if (newToken) setToken(newToken)
    } catch (error) {
      console.error('Error logueando usuario =>', error)
    }
  }

  const handleLogout = async () => {
    try {
      await logoutUser()
      setToken(null)
    } catch (error) {
      console.error('Error en logout =>', error)
    }
  }

  return (
    <>
      <HomeWrapper>
        <Title> Bienvenido </Title>
        <Button fontWeight='light'>Botón Ligero</Button>
        <Button fontStyle='italic'>Botón Itálico</Button>
        <Button fontWeight='thin' fontStyle='italic'>
          Botón Thin + Itálico
        </Button>
        <Button fontWeight='bold' fontStyle='italic'>
          Botón Bold + Itálico
        </Button>

        {users.length === 0 ? (
          <Loader size='small' />
        ) : (
          users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </HomeWrapper>

      <Button onClick={handleRegister}>Registrar</Button>
      <Button onClick={handleLogin}>Login</Button>
      {token && <Button onClick={handleLogout}>Logout</Button>}
      {token && <Title>Estamos en la ruta privada (token presente)</Title>}
    </>
  )
}
