import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from 'assets';
import FavoritesScreen from 'screens/Favorites';
import HomeScreen from 'screens/Home';
import CartScreen from 'screens/Home/Cart';
import CheckOutScreen from 'screens/Home/CheckOut';
import CongratsScreen from 'screens/Home/Congrats';
import Payment from 'screens/Home/Payment';
import ProductScreen from 'screens/Home/Product';
import SearchScreen from 'screens/Home/Search';
import NotifyScreen from 'screens/Notify';
import AddressUserScreen from 'screens/Settings/Address';
import MyOrderScreen from 'screens/Settings/Order';
import PaymentScreen from 'screens/Settings/Payment';
import ProfileScreen from 'screens/Settings/Profile';
import SettingScreen from 'screens/Settings/Setting';
import ShippingScreen from 'screens/Settings/Shipping';

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

const SetttingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShippingScreen"
        component={ShippingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddressUserScreen"
        component={AddressUserScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabApp = () => (
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
      component={NotifyScreen}
      options={{
        tabBarIcon: ({focused}) => {
          return <Image source={!focused ? images.bell : images.bell_active} />;
        },
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SetttingsStack}
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

const PrivateNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="TabApp"
        component={TabApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Congrats"
        component={CongratsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PrivateNavigation;
