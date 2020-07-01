import React, {useState} from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeSwitcher from './Components/ThemeSwitcher'
import { light, dark } from './assets/themes'
import Routes from './routes'
import GlobalStyle from './assets/GlobalStyle'

const App = () => {
  const[theme, setTheme] = useState(light)
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setTheme(theme === dark ? light : dark);
    if(theme === light) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }
   

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes/>
      <ThemeSwitcher toggleTheme={toggleTheme}
       isDark={isDark} />
    </ThemeProvider>
  )
}

export default App
