import { StyledCard } from './Card.styles'

interface CardProps {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>
}
