import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Types from 'types';
import { authService } from 'services';

export const signIn = createAsyncThunk<
  Types.SignInRes,
  Types.SignInReq,
  Types.ThunkAPI<Types.SignInErr>
>('auth/signIn', async (req, { rejectWithValue }) => {
  try {
    const { data } = await authService.signIn(req);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const signUp = createAsyncThunk<
  Types.SignUpRes,
  Types.SignUpReq,
  Types.ThunkAPI<Types.SignUpErr>
>('auth/signUp', async (req, { rejectWithValue }) => {
  try {
    const { data } = await authService.signUp(req);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
