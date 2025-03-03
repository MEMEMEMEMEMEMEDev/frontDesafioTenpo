import { StyledLoader } from './Loader.styles'

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'
}

export function Loader({ size = 'medium' }: LoaderProps) {
  return <StyledLoader size={size} />
}
