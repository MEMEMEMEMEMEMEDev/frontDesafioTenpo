import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }

  a {
    margin-top: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

export function NotFound() {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to='/'>Volver al inicio</Link>
    </NotFoundContainer>
  )
}
