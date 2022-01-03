import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigations/NavigationStack';
import NavigationTab from './src/navigations/NavigationTab';

function App() {
  return (
    <NavigationContainer>
      {/*<NavigationStack />*/}
      {/*<NavigationTab />*/}
      <NavigationTab />
    </NavigationContainer>
  );
}

export default App;

//<NavigationStack /> Navigation stack permite navergar entre las pantallas sin tab