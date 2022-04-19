import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Home/Home';
import LoginScreen from '../AuthScreens/LoginScreen'
import RegisterScreen from '../AuthScreens/RegisterScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>

      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation