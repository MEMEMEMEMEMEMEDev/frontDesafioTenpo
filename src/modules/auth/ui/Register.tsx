import { useState } from 'react'
import { useRegister } from '../application/useRegister'
import { Button } from '../../../shared/components/Button'
import { Input } from '../../../shared/components/Input'
import { Link } from 'react-router-dom'
import {
  validateEmail,
  validatePassword,
  passwordCriteria,
} from '../../../shared/utils/validations'
import styled from 'styled-components'

const PasswordCriteriaList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 8px;
`

const PasswordCriteriaItem = styled.li<{ $valid: boolean }>`
  color: ${({ $valid, theme }) => ($valid ? 'green' : theme.colors.error)};
  font-weight: ${({ $valid }) => ($valid ? 'bold' : 'normal')};
`

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<{
    email?: string
    password?: string
    confirmPassword?: string
  }>({})

  const { handleRegister, isLoading, error, isSuccess } = useRegister()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value) ? '' : 'Correo inválido',
    }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    setErrors((prev) => ({
      ...prev,
      password: validatePassword(value) ? '' : 'Contraseña débil',
      confirmPassword:
        confirmPassword && value !== confirmPassword
          ? 'Las contraseñas no coinciden'
          : '',
    }))
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value
    setConfirmPassword(value)
    setErrors((prev) => ({
      ...prev,
      confirmPassword: value !== password ? 'Las contraseñas no coinciden' : '',
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword) {
      setErrors({
        email: email ? '' : 'El correo es obligatorio',
        password: password ? '' : 'La contraseña es obligatoria',
        confirmPassword: confirmPassword ? '' : 'Debes confirmar la contraseña',
      })
      return
    }

    if (Object.values(errors).some((error) => error)) {
      return
    }

    handleRegister(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrarse</h2>

      {isSuccess ? (
        <p style={{ color: 'green' }}>
          Registro exitoso. Redirigiendo al login...
        </p>
      ) : (
        <>
          <Input
            label='Correo electrónico'
            type='email'
            value={email}
            onChange={handleEmailChange}
            error={errors.email}
          />

          <Input
            label='Contraseña'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            error={errors.password}
          />

          <PasswordCriteriaList>
            {passwordCriteria.map(({ rule, message }) => (
              <PasswordCriteriaItem key={message} $valid={rule.test(password)}>
                {rule.test(password) ? '✔' : '✖'} {message}
              </PasswordCriteriaItem>
            ))}
          </PasswordCriteriaList>

          <Input
            label='Confirmar Contraseña'
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={errors.confirmPassword}
          />

          <Button type='submit' disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </Button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <p>
            ¿Ya tienes cuenta? <Link to='/login'>Inicia sesión aquí</Link>
          </p>
        </>
      )}
    </form>
  )
}
