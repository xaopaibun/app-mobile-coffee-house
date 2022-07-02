import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import LoginScreen from 'screens/Login';

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
