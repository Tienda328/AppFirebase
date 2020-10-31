// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';

const Stack = createStackNavigator();

function Index() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;