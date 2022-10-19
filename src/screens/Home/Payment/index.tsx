import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const Payment: React.FC = ({route, navigation}: any) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <WebView
        source={{
          uri: route.params.link,
        }}
        onNavigationStateChange={(navState) => {
          console.log(navState);
          if (navState.url.search('/v1/payment/success') !== -1) {
            navigation.navigate('Congrats');
          }
        }}
      />
    </SafeAreaView>
  );
};
export default Payment;
