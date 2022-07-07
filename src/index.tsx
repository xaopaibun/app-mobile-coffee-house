import store from 'store';
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigations/Rootnavigation';

enableScreens();

type Props = {};

const App: React.FC<Props> = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
