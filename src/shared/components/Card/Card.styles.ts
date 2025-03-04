import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: background 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
  }
`
