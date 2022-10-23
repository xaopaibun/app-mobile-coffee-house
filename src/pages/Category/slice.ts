import {
  createSlice,
  //createEntityAdapter
} from '@reduxjs/toolkit';
import { Category } from 'types';
import { deleteCategoryThunk, getListCategoryThunk } from './thunk';

export type InitialState = {
  loading: boolean;
  listCategory: Array<Category>;
  totalResults: number;
};

const initialState: InitialState = {
  loading: false,
  listCategory: [],
  totalResults: 0,
};

export const categorySlice = createSlice({
  name: 'category-page',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListCategoryThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getListCategoryThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.listCategory = action.payload.results;
      state.totalResults = action.payload.totalResults;
    });

    builder.addCase(getListCategoryThunk.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteCategoryThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteCategoryThunk.fulfilled, (state, action) => {
      state.loading = false;
    });

    builder.addCase(deleteCategoryThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export const {} = categorySlice.actions;

export default categorySlice.reducer;
