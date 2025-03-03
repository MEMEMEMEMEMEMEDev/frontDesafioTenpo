import React from 'react'
import { screen } from '@testing-library/react'
import { Button } from '../../src/shared/components/Button'
import testRender from '../utils/testRender'

test('Renderiza el botón correctamente', () => {
  testRender(<Button>Click me</Button>)

  expect(screen.getByText(/click me/i)).toBeInTheDocument()
})
