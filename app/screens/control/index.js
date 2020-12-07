/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-07 20:26
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react'
import {View, Text} from 'react-native'
import {ThemeContext} from '@THEME'

const Index = () => {
  const {styles = {}} = useContext(ThemeContext) || {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Index</Text>
    </View>
  )
}

export default Index

