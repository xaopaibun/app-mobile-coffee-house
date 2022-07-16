import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import appReducer from 'containers/App/slice';

const persistConfig = {
  key: 'RNCodeSample',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  containers: combineReducers({
    app: appReducer,
  }),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;

export const persistor = persistStore(store);

persistor.purge();
