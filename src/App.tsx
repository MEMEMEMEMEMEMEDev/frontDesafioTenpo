import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { lightTheme } from './styles/themes/lightTheme'
import { darkTheme } from './styles/themes/darkTheme'
import { NormalizeStyles } from './styles/NormalizeStyles'
import { AppRouter } from './AppRouter'
import { FloatingButton } from './shared/components/FloatingButton/FloatingButton'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NormalizeStyles />
      <GlobalStyles />
      <BrowserRouter>
        <FloatingButton onClick={toggleTheme}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </FloatingButton>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
