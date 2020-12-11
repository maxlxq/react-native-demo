/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-07 20:47
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react'
import {View, Text} from 'react-native'
import {ThemeContext} from '@/THEME'

const DrawerTest = () => {
  const {styles = {}} = useContext(ThemeContext) || {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DrawerTest</Text>
    </View>
  )
}

export default DrawerTest

