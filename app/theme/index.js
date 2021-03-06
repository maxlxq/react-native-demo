import { createContext } from 'react'
import dark from './dark'
import light from './light'

export const themes = {
  dark,
  light,
}

export const addTheme = (key, value) => (themes[key] = value)

export const ThemeContext = createContext(null)
