/**
 * @author: maxlxq
 * @github: https://github.com/maxlxq/demo2
 * @Date: 2020-12-04 20:09
 * @Project: demo2
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react'
import {SafeAreaView, Text} from 'react-native'
import {ThemeContext} from '@THEME'

const Profile = () => {
  const { styles = {} } = useContext(ThemeContext) || {}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile

