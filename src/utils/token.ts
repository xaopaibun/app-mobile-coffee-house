import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_NAME = 'RNCodeSample_ACCESS_TOKEN';

export const setToken = (token: string) => {
  return AsyncStorage.setItem(TOKEN_NAME, token);
};

export const getToken = () => {
  return AsyncStorage.getItem(TOKEN_NAME);
};

export const clearAll = () => {
  return AsyncStorage.clear();
};
