import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TodoStack from './TodoStack';
import CalculatorScreen from '../screens/CalculatorScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Todo"
        component={TodoStack}
      />
      <Tab.Screen 
        name="Calculator" 
        component={CalculatorScreen} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
