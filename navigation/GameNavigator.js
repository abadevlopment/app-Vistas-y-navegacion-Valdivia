import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import GamerLogin from '../screens/GamerLogin'
import StartGameScreen from '../screens/StartGameScreen'
import Bye from '../screens/Bye'

const Stack = createNativeStackNavigator()

const GameNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Registro' >
            <Stack.Screen name='Registro' options={{ title: 'REGISTRATE' }} component={GamerLogin} />
            <Stack.Screen name='Jugar' options={{ title: 'RUEDA LOS DADOS' }} component={StartGameScreen} />
            <Stack.Screen name='Despedida' options={{ title: 'GRACIAS' }} component={Bye} />
        </Stack.Navigator>
    )
}

export default GameNavigator