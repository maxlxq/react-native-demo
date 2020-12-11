/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-03 16:51
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react'
import { Text, Pressable } from 'react-native'
import { ThemeContext } from '@/THEME'

const BaseButton = ({ text, onPress }) => {
  const { styles = {} } = useContext(ThemeContext) || {}
  return (
    <Pressable onPress={onPress} style={styles.btnBox}>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  )
}

export default BaseButton
