/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-03 16:51
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState, useCallback } from 'react'
import { Text, Pressable, Animated } from 'react-native'
import { ThemeContext } from '@/THEME'

const BASE_WIDTH = 60
const BASE_HEIGHT = 36

const Move = ({ text, testID }) => {
  const { styles = {} } = useContext(ThemeContext) || {}
  const [width] = useState(new Animated.Value(BASE_WIDTH))
  const [height] = useState(new Animated.Value(BASE_HEIGHT))

  const onPress = useCallback(() => {
    const shouldReset = width._value !== BASE_WIDTH
    Animated.timing(width, {
      toValue: shouldReset ? BASE_WIDTH : 100,
      duration: 1000,
    }).start()
    Animated.timing(height, {
      toValue: shouldReset ? BASE_HEIGHT : 80,
      duration: 1000,
    }).start()
  }, [height, width])

  return (
    <Animated.View style={{ width, height }}>
      <Pressable testID={testID} onPress={onPress} style={styles.btnBox}>
        <Text style={styles.btnText}>{text}</Text>
      </Pressable>
    </Animated.View>
  )
}

export default Move
