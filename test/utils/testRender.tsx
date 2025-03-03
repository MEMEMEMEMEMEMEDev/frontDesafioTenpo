import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../src/styles/themes'

const testRender = (ui: React.ReactNode) => {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>)
}

export default testRender
