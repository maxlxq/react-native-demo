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
import { ThemeContext } from '@/THEME'
import BaseButton from '@/COMPONENTS/Button/BaseButton'

const Home = ({ navigation }) => {
  const { styles = {} } = useContext(ThemeContext) || {}

  const onPressSetting = useCallback(() => navigation.navigate('Setting'), [navigation])
  const onPressArticle = useCallback(() => navigation.navigate('ArticleDetail', { id: 'Detail ID' }), [navigation])
  const onPressDrawer = useCallback(() => navigation.navigate('Drawer'), [navigation])
  const onSetHomeBadge = useCallback(() => navigation.setOptions({ tabBarBadge: Math.ceil(Math.random() * 100) }), [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BaseButton testID='on_press_setting' onPress={onPressSetting} text='To Setting' />
        <BaseButton testID='on_press_article' onPress={onPressArticle} text='To Article Detail' />
        <BaseButton testID='on_set_badge' onPress={onSetHomeBadge} text='Set Home Tab Badge' />
        <BaseButton testID='on_press_drawer' onPress={onPressDrawer} text='To Drawer Page' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
