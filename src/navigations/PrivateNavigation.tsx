import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomeScreen from 'screens/Home';

const Stack = createNativeStackNavigator();

const PrivateNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
};

export default PrivateNavigation;
