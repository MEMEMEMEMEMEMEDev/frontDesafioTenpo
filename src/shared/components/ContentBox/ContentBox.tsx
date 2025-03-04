import styled from 'styled-components'

const ContentBox = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  width: 400px;
  max-width: 90%;
  text-align: center;
`

export { ContentBox }
