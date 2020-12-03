/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-03 20:23
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useCallback } from 'react'
import { View, Text, Pressable } from 'react-native'
import { ThemeContext } from '@THEME'

const Home = ({ navigation }) => {
  const { styles = {} } = useContext(ThemeContext) || {}

  const onPressSetting = useCallback(() => navigation.navigate('Setting'), [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Pressable onPress={onPressSetting} style={styles.btnBox}>
        <Text style={styles.btnText}>to Setting</Text>
      </Pressable>
    </View>
  )
}

export default Home
