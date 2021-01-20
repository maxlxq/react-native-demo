/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-04 19:07
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { ThemeContext } from '@/THEME'

const ArticleDetail = ({ route }) => {
  const { styles = {}, colors = {} } = useContext(ThemeContext) || {}
  const { id = '' } = route.params
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ArticleDetail</Text>
      <Text style={styles.title}>{id}</Text>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.textInputBase}
        placeholderTextColor={colors.fontColor}
        value={text}
        onChangeText={setText}
        testID="article_input"
      />
    </View>
  )
}

export default ArticleDetail

