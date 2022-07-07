import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from 'assets';
import FavoritesScreen from 'screens/Favorites';
import HomeScreen from 'screens/Home';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const PrivateNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  !focused
                    ? images.clarity_home_solid
                    : images.clarity_home_solid_active
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={!focused ? images.marker : images.marker_active} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notify"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={!focused ? images.bell : images.bell_active} />
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={!focused ? images.bi_person : images.bi_person_active}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default PrivateNavigation;
