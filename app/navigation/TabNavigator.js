import React, { useContext } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '@/THEME'
import Home from '@/SCREENS/home'
import Profile from '@/SCREENS/profile'
import Demo from '@/SCREENS/demo'

const Tab = createBottomTabNavigator()

const getTabIcon = focused => ({
  Home: focused ? 'home' : 'home-outline',
  Profile: focused ? 'menu' : 'menu-outline',
  Demo: focused ? 'barcode' : 'barcode-outline',
})

const TabNavigator = () => {
  const { colors = {}, styles = {} } = useContext(ThemeContext) || {}
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getTabIcon(focused)[route.name]
          return <Ionicons name={iconName} color={color} size={size} />
        },
        tabBarBadgeStyle: styles.badge,
      })}
      tabBarOptions={{
        activeTintColor: colors.tabActiveColor,
        inactiveTintColor: colors.tabColor,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Demo" component={Demo} />
    </Tab.Navigator>
  )
}

export default TabNavigator
