import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigations/NavigationsStack';


function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

export default App;