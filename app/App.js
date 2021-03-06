/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-11-19 19:35
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useMemo, useEffect } from 'react'
import fundebug from 'fundebug-reactnative'
import { Provider } from 'react-redux'
import configureStore from '@/STORE'
import Main from './Main'
import { APP_THEME } from '@/CONSTANTS/App'
import { getStyles } from '@/STYLES/styles'
import { FUNDEBUG_KEY } from '@/CONFIG'
import { themes, ThemeContext } from '@/THEME'

const { store } = configureStore()

const App = () => {
  const [theme, changeTheme] = useState(APP_THEME.Light)
  const styles = useMemo(() => getStyles(themes[theme]), [theme])
  useEffect(() => {
    fundebug.init({
      apikey: FUNDEBUG_KEY,
    })
  }, [])
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ colors: themes[theme], themeName: theme, styles, changeTheme }}>
        <Main />
      </ThemeContext.Provider>
    </Provider>
  )
}

export default App
