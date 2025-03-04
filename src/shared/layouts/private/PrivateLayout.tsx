import { Outlet } from 'react-router-dom'
import { LogoutButton } from '../../../modules/auth/ui/LogoutButton'
import { Title } from '../../components/Title/Title'
import { Wrapper } from '../../components/Wrapper/Wrapper'
import { Header } from '../../components/Header/Header'
import { Content } from '../../components/Content/Content'

export function PrivateLayout() {
  return (
    <Wrapper>
      <Header>
        <Title>Panel de Usuarios</Title>
        <LogoutButton />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  )
}
