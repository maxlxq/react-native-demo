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
import { SafeAreaView, ScrollView, Text } from 'react-native'
import { ThemeContext } from '@THEME'
import BaseButton from '@COMPONENTS/Button/BaseButton'

const Home = ({ navigation }) => {
  const { styles = {} } = useContext(ThemeContext) || {}

  const onPressSetting = useCallback(() => navigation.navigate('Setting'), [navigation])
  const onPressArticle = useCallback(() => navigation.navigate('ArticleDetail', { id: 'Detail ID' }), [navigation])
  const onSetHomeBadge = useCallback(() => navigation.setOptions({ tabBarBadge: Math.ceil(Math.random() * 100) }), [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BaseButton onPress={onPressSetting} text='To Setting' />
        <BaseButton onPress={onPressArticle} text='To Article Detail' />
        <BaseButton onPress={onSetHomeBadge} text='Set Home Tab Badge' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
