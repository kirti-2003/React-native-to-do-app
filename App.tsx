import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './android/app/src/navigation/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
