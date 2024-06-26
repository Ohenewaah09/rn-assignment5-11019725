import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Settings from './Components/Settings';
import { ThemeProvider } from './Components/ThemeContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Settings' component={Settings} options={{headerShown: false}} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
     </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
