import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'services';
import * as Types from 'types';

interface ActionError {}

export const getListUserThunk = createAsyncThunk<
  Types.ResponseBase<Types.User>,
  Types.BaseParams,
  Types.ThunkAPI<ActionError>
>('users/thunk/getData', async (params, { rejectWithValue }) => {
  try {
    const { data } = await userService.getListUser(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteUserThunk = createAsyncThunk<undefined, string, Types.ThunkAPI<ActionError>>(
  'users/thunk/delete',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await userService.deleteUserByID(params);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createUserThunk = createAsyncThunk<undefined, FormData, Types.ThunkAPI<ActionError>>(
  'users/thunk/create',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await userService.createUser(params);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
