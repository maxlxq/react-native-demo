/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-11-19 19:35
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { ThemeContextProvider } from '../theme'
import Main from './Main'

const App = () => {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  )
}

export default App
