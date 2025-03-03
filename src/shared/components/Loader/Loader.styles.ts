import styled from 'styled-components'

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'
}

export const StyledLoader = styled.div<LoaderProps>`
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '20px'
      case 'medium':
        return '40px'
      case 'large':
        return '60px'
      default:
        return '40px'
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '20px'
      case 'medium':
        return '40px'
      case 'large':
        return '60px'
      default:
        return '40px'
    }
  }};
  animation: loading 1s linear infinite;
  margin: 0 auto;
`
