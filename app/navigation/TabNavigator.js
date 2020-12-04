import React, { useContext } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '@THEME'
import Home from '@SCREENS/home'
import Profile from '@SCREENS/profile'

const Tab = createBottomTabNavigator()

const getTabIcon = focused => ({
  Home: focused ? 'add-circle' : 'add-circle-outline',
  Profile: focused ? 'airplane' : 'airplane-outline',
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
    </Tab.Navigator>
  )
}

export default TabNavigator
