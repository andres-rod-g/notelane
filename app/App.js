import { useFonts } from "expo-font";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/loginScreen/loginScreen'

export default function App() {
  const [loaded] = useFonts({
    Sansation: require('./assets/fonts/Sansation_Regular.ttf'),

  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E24',
    color: '#F7EBE8',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
