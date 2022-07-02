import {createSlice} from '@reduxjs/toolkit';
import {login} from 'screens/Login/thunk';

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.auth.isLogin = true;
    });
  },
});

export default AppSlice.reducer;
