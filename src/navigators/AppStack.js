import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import TabBottomScreen from './tab-bottom'
 
const Stack = createStackNavigator();
 
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Homescreen' component={HomeScreen} />
    </Stack.Navigator>
  );
}
 
export default AppStack;