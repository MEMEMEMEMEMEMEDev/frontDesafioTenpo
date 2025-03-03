import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { lightTheme } from './styles/themes/lightTheme'
import { darkTheme } from './styles/themes/darkTheme'
import { HomePage } from './modules/home/HomePage'
import { NormalizeStyles } from './styles/NormalizeStyles'
import { Button } from './shared/components/Button'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NormalizeStyles />
      <GlobalStyles />
      <Button onClick={toggleTheme}>
        Switch to {isDark ? 'Light' : 'Dark'} Theme
      </Button>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
