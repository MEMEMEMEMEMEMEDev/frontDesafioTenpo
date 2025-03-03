import styled from 'styled-components'

interface ButtonProps {
  fontWeight?: 'regular' | 'bold' | 'light' | 'thin'
  fontStyle?: 'normal' | 'italic'
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  border: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case 'bold':
        return 700
      case 'light':
        return 300
      case 'thin':
        return 200
      default:
        return 400
    }
  }};

  font-style: ${({ fontStyle }) => fontStyle || 'normal'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`
