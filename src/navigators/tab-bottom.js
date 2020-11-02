import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home'
import DetailScreen from '../screens/detail'

const Tab = createBottomTabNavigator();

export default function TabBottom() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="DetailSreen" component={DetailScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  