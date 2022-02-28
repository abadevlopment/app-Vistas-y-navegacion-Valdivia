import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import Colors from '../constants/Colors'

const NameInput = () => {
    return (
        <View
            style={styles.inputContainer}
        >
            <TextInput
                style={styles.input}
                value={'en desarrollo'}
                onChangeText={()=>{}}
            />
            <Button
                onPress={()=>{}}
                title='Agregar'
            />
        </View>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 100,
        overflow: 'hidden'
    },
    input: {
        flex: 1,
    },

})

export default NameInput