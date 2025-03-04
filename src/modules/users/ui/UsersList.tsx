import { useState } from 'react'
import { useFetchUsers } from '../application/useFetchUsers'
import { UserCard } from './UserCard'
import styled from 'styled-components'
import { Pagination } from '../../../shared/components/Pagination/Pagination'
import { Title } from '../../../shared/components/Title/Title'
import { Loader } from '../../../shared/components/Loader/Loader'

const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.large};
  max-width: 1200px;
  padding: ${({ theme }) => theme.spacing.large};
`

export function UsersList() {
  const { users, isLoading, error } = useFetchUsers()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  if (isLoading) return <Loader size='large' />
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  const startIndex = (currentPage - 1) * itemsPerPage
  const selectedUsers =
    users?.slice(startIndex, startIndex + itemsPerPage) ?? []

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '8rem',
      }}>
      <Title>Lista de usuarios</Title>
      <UsersContainer>
        {selectedUsers.length > 0 ? (
          selectedUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No hay usuarios disponibles</p>
        )}
      </UsersContainer>

      <Pagination
        totalItems={users?.length ?? 0}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
