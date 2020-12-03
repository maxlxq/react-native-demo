/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-11-19 19:23
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Setting from '@SCREENS/control/Setting'
import HomeScreen from '@SCREENS/home'
import {ThemeContext} from '@THEME'
import React, {useContext, useMemo} from 'react'

import {APP_THEME} from '../constants/App'

const Stack = createStackNavigator()

const Main =
    () => {
      const {themeName, colors} = useContext(ThemeContext) || {}
      const dark = useMemo(() => themeName === APP_THEME.Dark, [ themeName ])

      const theme = {
        ...DefaultTheme,
        dark,
        colors,
      }

      return (<NavigationContainer theme = {theme}><Stack.Navigator>
              <Stack.Screen name = 'Home' component =
               {
                 HomeScreen
               } />
				<Stack.Screen name='Setting' component={Setting} />
              </Stack.Navigator>
		</NavigationContainer>)
    }

export default Main
