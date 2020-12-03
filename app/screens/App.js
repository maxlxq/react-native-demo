/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-11-19 19:35
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useState, useMemo } from 'react'
import Main from './Main'
import {APP_THEME} from '../constants/App'
import {getStyles} from '../styles/styles'
import {themes} from '../theme'

export const ThemeContext = createContext(null)

export const App = () => {
  const [theme, changeTheme] = useState(APP_THEME.Light)
  const styles = useMemo(() => getStyles(themes[theme]), [theme])
  return (
    <ThemeContext.Provider value={{ colors: themes[theme], themeName: theme, styles, changeTheme }}>
      <Main />
    </ThemeContext.Provider>
  )
}

export default App
