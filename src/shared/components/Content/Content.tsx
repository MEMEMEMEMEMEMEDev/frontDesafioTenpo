import styled from 'styled-components'

const Content = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`

export { Content }
