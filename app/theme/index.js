import React, { createContext, useState, useMemo } from 'react'
import dark from './dark'
import light from './light'
import { getStyles } from '../styles/styles'
import { APP_THEME } from '../constants/App'

const themes = {
  dark,
  light,
}

export const addTheme = (key, value) => (themes[key] = value)

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, changeTheme] = useState(APP_THEME.Light)
  const styles = useMemo(() => getStyles(themes[theme]), [theme])
  return (
    <ThemeContext.Provider value={{ colors: themes[theme], themeName: theme, styles, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
