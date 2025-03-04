import { Button } from '../../../shared/components/Button'
import { useLogout } from '../application/useLogout'

export function LogoutButton() {
  const { handleLogout } = useLogout()

  return <Button onClick={handleLogout}>Cerrar sesión</Button>
}
