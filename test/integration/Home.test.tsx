import React from 'react'
import testRender from '../utils/testRender'
import { screen } from '@testing-library/react'
import { HomePage } from '../../src/modules/home/HomePage'

test('Renderiza la página de inicio con el título correcto', () => {
  testRender(<HomePage />)

  const title = screen.getByText('Bienvenido')
  expect(title).toBeInTheDocument()
})
