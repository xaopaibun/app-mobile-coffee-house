import {combineReducers} from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
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
  middleware: getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;

export const persistor = persistStore(store);

// persistor.purge();
