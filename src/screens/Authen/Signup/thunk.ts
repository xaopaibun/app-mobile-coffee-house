import {createAsyncThunk} from '@reduxjs/toolkit';
import {authService} from 'services';
import * as TYPE from 'types';
import {setToken} from 'utils';

export const login = createAsyncThunk<
  TYPE.LoginResponse,
  TYPE.LoginRequest,
  TYPE.ThunkAPI<TYPE.ResponseError>
>('login/login', async (params, {rejectWithValue}) => {
  try {
    const {data} = await authService.login(params);
    await setToken(data.auth_token);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const signup = createAsyncThunk<
  TYPE.LoginResponse,
  TYPE.LoginRequest,
  TYPE.ThunkAPI<TYPE.ResponseError>
>('login/signup', async (params, {rejectWithValue}) => {
  try {
    const {data} = await authService.login(params);
    await setToken(data.auth_token);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
