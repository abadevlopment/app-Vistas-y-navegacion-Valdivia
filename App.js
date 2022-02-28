import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import GameNavigator from './navigation/GameNavigator';

export default function App() {
  const [loaded] = useFonts({
    SpaceMono : require('./assets/fonts/SpaceMono-Regular.ttf'),
    SpaceMonoBold : require('./assets/fonts/SpaceMono-Bold.ttf'),
  });

  if (!loaded) return <AppLoading/>

  return (
    // <View style={styles.container}>
    //   <Header title='RUEDA LOS DADOS' />
      <GameNavigator/>
      // {/* <StartGameScreen/> */}
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
