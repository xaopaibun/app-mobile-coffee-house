import {createSlice} from '@reduxjs/toolkit';
import {login} from 'screens/Authen/Login/thunk';

type InitialStateProps = {
  auth: {
    isLogin: boolean;
  };
};

const initialState: InitialStateProps = {
  auth: {
    isLogin: false,
  },
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.auth.isLogin = true;
    });
  },
});

export const {logout} = AppSlice.actions;

export default AppSlice.reducer;
