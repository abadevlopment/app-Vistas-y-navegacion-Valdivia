import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GameNavigator from './GameNavigator'
import AppNavigator from './AppNavigator'

const Tab = createBottomTabNavigator() 

const TabNavigator = () => {
  return (
      <Tab.Navigator initialRouteName='Game' >
          <Tab.Screen name='Game' options={{title: 'Jugar'}} component={GameNavigator} />
          <Tab.Screen name='Games' options={{title: 'Mas juegos'}} component={AppNavigator} />
      </Tab.Navigator>
  )
}

export default TabNavigator