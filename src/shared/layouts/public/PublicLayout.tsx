import { Outlet } from 'react-router-dom'
import { Title } from '../../components/Title/Title'
import { ContentBox } from '../../components/ContentBox/ContentBox'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`

export function PublicLayout() {
  return (
    <Wrapper>
      <ContentBox>
        <Title>Bienvenido a la App</Title>
        <Outlet />
      </ContentBox>
    </Wrapper>
  )
}
