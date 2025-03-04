import { Routes, Route } from 'react-router-dom'
import { PublicRoute } from './routes/PublicRoute'
import { PrivateRoute } from './routes/PrivateRoute'

import { PublicLayout } from './shared/layouts/public/PublicLayout'
import { PrivateLayout } from './shared/layouts/private/PrivateLayout'

import { Login } from './modules/auth/ui/Login'
import { Register } from './modules/auth/ui/Register'
import { UsersList } from './modules/users/ui/UsersList'
import { NotFound } from './shared/components/NotFound/NotFound'

import { Navigate } from 'react-router-dom'

function RedirectHome() {
  const token = localStorage.getItem('accessToken')

  return <Navigate to={token ? '/users' : '/login'} replace />
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<RedirectHome />} />

      <Route element={<PublicRoute restricted={true} />}>
        <Route element={<PublicLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path='/users' element={<UsersList />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
