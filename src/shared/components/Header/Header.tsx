import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.navBackground};
  box-shadow: ${({ theme }) => theme.shadows.small};
  width: 100%;
  position: fixed;
  top: 0;
`

export { Header }
