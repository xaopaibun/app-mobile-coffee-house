import { createSlice } from '@reduxjs/toolkit';
import { UserAuth } from 'types';
import { signIn } from './thunk';

export interface InitialState {
  isLogin: boolean;
  loading: boolean;
  user: UserAuth;
}

const initialState: InitialState = {
  isLogin: false,
  loading: false,
  user: {} as UserAuth,
};

export const authSlice = createSlice({
  name: 'auth-container',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.user = {} as UserAuth;
      // state.signedInEmail = undefined;
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(signIn.pending, (state) => {
      state.isLogin = false;
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogin = true;
      state.loading = false;
      state.user = action.payload.user;
      localStorage.setItem('coffee-house-token', action.payload.tokens.access.token);
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isLogin = true;
      state.loading = false;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
