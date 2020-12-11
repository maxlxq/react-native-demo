import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from '@/NAVIGATION/TabNavigator'
import Setting from '@/SCREENS/control/Setting'
import ArticleDetail from '@/SCREENS/article/ArticleDetail'
import DrawerNavigator from '@/NAVIGATION/DrawerNavigator'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tab' component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Setting' component={Setting} />
      <Stack.Screen name='ArticleDetail' component={ArticleDetail} />
      <Stack.Screen name='Drawer' component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator
