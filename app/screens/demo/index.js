/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-15 20:25
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useCallback } from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import { ThemeContext } from '@/THEME'
import BaseButton from '@/COMPONENTS/Button/BaseButton'

const Demo = ({ navigation }) => {
  const { styles = {} } = useContext(ThemeContext) || {}

  const onNavigateToRedux = useCallback(() => navigation.navigate('Redux'), [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Demo Page</Text>
        <BaseButton onPress={onNavigateToRedux} text='To Redux' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Demo

