import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import GamerLogin from '../screens/GamerLogin'
import StartGameScreen from '../screens/StartGameScreen'
import Bye from '../screens/Bye'

const Stack = createNativeStackNavigator()

const GameNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Registro' >
                <Stack.Screen name='Registro' component={GamerLogin} />
                <Stack.Screen name='Jugar' component={StartGameScreen} />
                <Stack.Screen name='Despedida' component={Bye} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default GameNavigator