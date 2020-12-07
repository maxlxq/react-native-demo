import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Control from '@SCREENS/control'
import DrawerTest from '@SCREENS/control/DrawerTest'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Root'>
      <Drawer.Screen name='DrawerTest' component={DrawerTest} />
      <Drawer.Screen name='Control' component={Control} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
