/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-11-19 19:23
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useMemo } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { ThemeContext } from '@/THEME'
import { APP_THEME } from '@/CONSTANTS/App'
import StackNavigator from '@/NAVIGATION/StackNavigator'

const Main = () => {
	const { themeName, colors } = useContext(ThemeContext) || {}
	const dark = useMemo(() => themeName === APP_THEME.Dark, [themeName])

	const theme = {
		...DefaultTheme,
		dark,
		colors,
	}

	return (
		<NavigationContainer theme={theme}>
			<StackNavigator />
		</NavigationContainer>
	)
}

export default Main
