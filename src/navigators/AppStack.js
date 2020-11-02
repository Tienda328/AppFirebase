import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settingscreen from '../screens/setting';
import TabBottomScreen from './tab-bottom'
 
const Stack = createStackNavigator();
 
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Homescreen' component={TabBottomScreen} />
      <Stack.Screen name='Settingscreen' component={Settingscreen} />
    </Stack.Navigator>
  );
}
 
export default AppStack;