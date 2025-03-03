import { StyledTitle } from './Title.styles'

interface TitleProps {
  children: React.ReactNode
}

export function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>
}
