/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-03 16:51
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BaseButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BaseButton</Text>
    </View>
  )
}

export default BaseButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#333',
    fontFamily: 'PingFangSC-Regular',
  },
})
