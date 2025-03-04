import styled from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`

const StyledInput = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  transition: border 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`

const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-top: 4px;
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <InputWrapper>
      <label>{label}</label>
      <StyledInput {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  )
}
