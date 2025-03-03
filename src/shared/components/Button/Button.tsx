import { StyledButton } from './Button.styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  fontWeight?: 'regular' | 'bold' | 'light' | 'thin'
  fontStyle?: 'normal' | 'italic'
}

export function Button({
  children,
  fontWeight = 'regular',
  fontStyle = 'normal',
  ...props
}: ButtonProps) {
  return (
    <StyledButton fontWeight={fontWeight} fontStyle={fontStyle} {...props}>
      {children}
    </StyledButton>
  )
}
