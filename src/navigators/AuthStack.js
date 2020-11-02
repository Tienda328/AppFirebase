import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/signup';
import LoginScreen from '../screens/login';
 
const Stack = createStackNavigator();
 
const AuthStack = () => {
 
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};
 
export default AuthStack;