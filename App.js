// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Felicidades from './src/pages/Felicidades';
import Tristezas from './src/pages/Tristezas';
import Usuario from './src/pages/Usuario';
import Noticias from './src/pages/Noticias';

// Configura a pilha de navegação
const Stack = createStackNavigator();

export default function App() {
  return (
    // Container da navegação
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Felicidades"
          component={Felicidades}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tristezas"
          component={Tristezas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Usuario"
          component={Usuario}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Noticias"
          component={Noticias}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
