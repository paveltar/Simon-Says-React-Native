import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../components/screens/HomeScreen';
import ScoreBoard from '../components/screens/ScoreBoard';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ScoreBoard" component={ScoreBoard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
