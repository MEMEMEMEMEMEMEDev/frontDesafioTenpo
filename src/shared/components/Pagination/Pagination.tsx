import styled from 'styled-components'

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  overflow-x: auto;
  margin-top: ${({ theme }) => theme.spacing.large};
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
`

const PageButton = styled.button<{ active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  border-radius: 5px;
  border: none;
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        ← Anterior
      </PageButton>

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1
        return (
          <PageButton
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </PageButton>
        )
      })}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Siguiente →
      </PageButton>
    </PaginationContainer>
  )
}
