import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GameScreen from '../components/screens/GameScreen';
import ScoreBoard from '../components/screens/ScoreBoard';
import {backgroundColor} from '../utils/constants';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{style: {backgroundColor}}}>
        <Tab.Screen name="GameScreen" component={GameScreen} />
        <Tab.Screen name="ScoreBoard" component={ScoreBoard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
