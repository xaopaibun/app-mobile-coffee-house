import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export const store = configureStore({
  reducer: combineReducers(reducers),
});
