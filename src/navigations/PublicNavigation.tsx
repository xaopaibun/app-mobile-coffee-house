import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import LoginScreen from 'screens/Authen/Login';
import SignupScreen from 'screens/Authen/Signup';

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
