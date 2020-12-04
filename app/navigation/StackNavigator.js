import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from '@NAVIGATION/TabNavigator'
import Setting from '@SCREENS/control/Setting'
import ArticleDetail from '@SCREENS/article/ArticleDetail'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tab' component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Setting' component={Setting} />
      <Stack.Screen name='ArticleDetail' component={ArticleDetail} />
    </Stack.Navigator>
  )
}

export default StackNavigator
