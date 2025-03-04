import styled from 'styled-components'
import { User } from '../domain/interfaces'
import { Card } from '../../../shared/components/Card/Card'

const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin: ${({ theme }) => theme.spacing.small} 0;
`

const Email = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  margin: 0;
`

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card>
      <UserName>{user.email}</UserName>
      <Email>ID: {user.id}</Email>
    </Card>
  )
}
