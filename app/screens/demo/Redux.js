/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-15 20:34
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useContext} from 'react'
import {SafeAreaView, ScrollView, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import BaseButton from '@/COMPONENTS/Button/BaseButton'
import { ThemeContext } from '@/THEME'
import homeAction from '@/ACTION/home'

const Redux = () => {
  const { styles = {} } = useContext(ThemeContext) || {}
  const dispatch = useDispatch()
  const count = useSelector(state => state.home.count)

  const onIncrease = useCallback(() => dispatch(homeAction.increase()), [dispatch])
  const onDecrease = useCallback(() => dispatch(homeAction.decrease()), [dispatch])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Redux Simple Demo</Text>
        <BaseButton onPress={onIncrease} text='Increase Button' />
        <Text style={styles.title}>{count}</Text>
        <BaseButton onPress={onDecrease} text='Decrease Button' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Redux

