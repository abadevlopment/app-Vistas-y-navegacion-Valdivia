import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Buttons from '../components/Button'
import Colors from '../constants/Colors'
import NameInput from '../components/NameInput'



const GamerLogin = ({ navigation }) => {
    const navegar = () => {
        navigation.navigate('Jugar')
    }


    return (
        <View style={styles.screen} >
            <Card style={styles.gameContainer} >
                <Text style={styles.title2} >Jugador A</Text>
            </Card>
            <Card style={styles.gameContainer} >
                    <NameInput/>
            </Card>
            <Card style={styles.gameContainer} >
                <Text style={styles.title2} >Jugador B</Text>
            </Card>
            <Card style={styles.gameContainer} >
            <NameInput/>
            </Card>
            <Card style={styles.gameContainer} >
                <View style={styles.buttonContainer} >
                    <Buttons style={styles.buttonGame} title='Empezar a jugar' onPress={navegar} ></Buttons>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    title2: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        color: Colors.accent
    },
    gameContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 5,
    },
    diceContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        padding: 20
    },
    buttonContainer: {
        // borderColor: 'blue',
        // borderWidth:1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        padding: 10
    },
    buttonGame: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: Colors.primary,
        borderColor: Colors.accent,
    },
    buttonGame2: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: Colors.accent,
        borderColor: Colors.primary,
    },

})


export default GamerLogin