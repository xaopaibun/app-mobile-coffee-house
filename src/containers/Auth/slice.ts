import { createSlice } from '@reduxjs/toolkit';
import { signIn } from './thunk';

export interface InitialState {
  isLogin: boolean;
  loading: boolean;
}

const initialState: InitialState = {
  isLogin: false,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth-container',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signIn.fulfilled, (state) => {
      state.isLogin = true;
    });
  },
});

export default authSlice.reducer;
