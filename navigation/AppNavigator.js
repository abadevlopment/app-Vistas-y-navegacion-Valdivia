import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Games from '../screens/Games'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Juegos' options={{ title: 'OTROS JUEGOS' }} component={Games} />
        </Stack.Navigator>
    )
}

export default AppNavigator