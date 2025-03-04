import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRouteProps {
  redirectTo?: string
}

export const PrivateRoute = ({ redirectTo = '/login' }: PrivateRouteProps) => {
  const token = localStorage.getItem('accessToken')

  return token ? <Outlet /> : <Navigate to={redirectTo} replace />
}
