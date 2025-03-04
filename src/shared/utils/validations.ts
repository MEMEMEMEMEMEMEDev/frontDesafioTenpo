export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string) => {
  return (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length >= 8
  )
}

export const passwordCriteria = [
  { rule: /.{8,}/, message: 'Mínimo 8 caracteres' },
  { rule: /[A-Z]/, message: 'Al menos una mayúscula' },
  { rule: /[a-z]/, message: 'Al menos una minúscula' },
  { rule: /\d/, message: 'Al menos un número' },
  { rule: /[^A-Za-z0-9]/, message: 'Al menos un caracter especial' },
]
