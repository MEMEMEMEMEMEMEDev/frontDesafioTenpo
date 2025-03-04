import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLogin } from '../application/useLogin'

import { Button } from '../../../shared/components/Button'
import { Input } from '../../../shared/components/Input'
import {
  validateEmail,
  validatePassword,
} from '../../../shared/utils/validations'
import { Loader } from '../../../shared/components/Loader/Loader'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  )
  const { handleLogin, isLoading, error } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { email?: string; password?: string } = {}
    if (!validateEmail(email)) newErrors.email = 'Correo inválido'
    if (!validatePassword(password))
      newErrors.password = 'Contraseña incorrecta'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      handleLogin(email, password)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>

      <Input
        label='Correo electrónico'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <Input
        label='Contraseña'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />

      <Button type='submit' disabled={isLoading}>
        {isLoading ? <Loader size='large' /> : 'Iniciar Sesión'}
      </Button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>
        ¿No tienes cuenta? <Link to='/register'>Regístrate aquí</Link>
      </p>
    </form>
  )
}
