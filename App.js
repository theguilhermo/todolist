import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import NewTodoScreen from './screens/NewTodoScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(0);

  useEffect(() => {
    let aux;
    // Cria função assincrona para carregamento das fontes e dados dos todos
    async function loadFont() {
      await Font.loadAsync({
        'Poppins': require('./assets/fonts/Poppins_Regular.ttf'),
        'League Spartan': require('./assets/fonts/League_Spartan_Regular.ttf'),
      });
      setFontLoaded(1);
    }
    // Chama função criada
    loadFont();
  }, []);

  return (
    <>
      { fontLoaded ? (
        <NavigationContainer>
          <Stack.Navigator mode="modal">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="NewTodo" component={NewTodoScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large"/>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
