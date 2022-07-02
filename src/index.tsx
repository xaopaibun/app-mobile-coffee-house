import store from 'store';
import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigations/Rootnavigation';

enableScreens();

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
