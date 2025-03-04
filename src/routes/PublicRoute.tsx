import { Navigate, Outlet } from 'react-router-dom'

interface PublicRouteProps {
  restricted?: boolean
  redirectTo?: string
}

export const PublicRoute = ({
  restricted = false,
  redirectTo = '/users',
}: PublicRouteProps) => {
  const token = localStorage.getItem('accessToken')

  if (token && restricted) {
    return <Navigate to={redirectTo} replace />
  }

  return <Outlet />
}
