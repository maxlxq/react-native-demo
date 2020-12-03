import dark from './dark'
import light from './light'

export const themes = {
  dark,
  light,
}

export const addTheme = (key, value) => (themes[key] = value)
