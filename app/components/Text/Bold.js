/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-11-19 19:23
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Bold = ({
  text,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

export default Bold

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#333',
    fontFamily: 'PingFangSC-Regular',
  },
})
