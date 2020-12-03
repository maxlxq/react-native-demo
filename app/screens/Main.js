/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-11-19 19:23
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useCallback } from 'react'
import { View, Text, Pressable } from 'react-native'
import { ThemeContext } from './App'
import { APP_THEME } from '../constants/App'

const Main = () => {
	const { styles = {}, themeName, changeTheme } = useContext(ThemeContext) || {}
	const onChangeTheme = useCallback(() => {
		if (APP_THEME.Light === themeName) {
			changeTheme(APP_THEME.Dark)
		} else {
			changeTheme(APP_THEME.Light)
		}
	}, [themeName, changeTheme])
	return (
		<View style={styles.container}>
			<Text style={styles.bold}>Main</Text>
			<Pressable onPress={onChangeTheme}>
				<Text style={styles.btnText}>改变主题</Text>
			</Pressable>
		</View>
	)
}

export default Main
