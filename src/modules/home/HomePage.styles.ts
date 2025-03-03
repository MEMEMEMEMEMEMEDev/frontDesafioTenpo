import styled from 'styled-components'

export const HomeWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
