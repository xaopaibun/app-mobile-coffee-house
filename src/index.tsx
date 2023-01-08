import socketIOClient from 'socket.io-client';
import store from 'store';
import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';
import {LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import PushNotification from 'react-native-push-notification';
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

  const socketRef = useRef<null>() as any;
  useEffect(() => {
    socketRef.current = socketIOClient.connect('http://192.168.0.101:8000');
    socketRef.current.on('notification-test-mobile', (data: string) => {
      PushNotification.localNotification({
        channelId: 'your-channel-id',
        ticker: 'Thông báo',
        message: data,
      });
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};
export default App;
