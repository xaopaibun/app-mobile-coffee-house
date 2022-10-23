import {
  createSlice,
  //createEntityAdapter
} from '@reduxjs/toolkit';
import { User } from 'types';
import { deleteUserThunk, getListUserThunk } from './thunk';

export type InitialState = {
  loading: boolean;
  listUser: Array<User>;
  totalResults: number;
};

const initialState: InitialState = {
  loading: false,
  listUser: [],
  totalResults: 0,
};
export const usersSlice = createSlice({
  name: 'users-page',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListUserThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getListUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.listUser = action.payload.results;
      state.totalResults = action.payload.totalResults;
    });

    builder.addCase(getListUserThunk.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteUserThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(deleteUserThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export const {} = usersSlice.actions;

export default usersSlice.reducer;
