import { createAsyncThunk } from '@reduxjs/toolkit';
import { productService } from 'services';
import * as Types from 'types';

//TODO import it from @types
interface ActionError {}

export const getListCategoryThunk = createAsyncThunk<
  Types.ResponseBase<Types.Category>,
  Types.BaseParams | undefined,
  Types.ThunkAPI<ActionError>
>('category/thunk/getData', async (params, { rejectWithValue }) => {
  try {
    const { data } = await productService.getListCategory(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteCategoryThunk = createAsyncThunk<undefined, string, Types.ThunkAPI<ActionError>>(
  'category/thunk/delete',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await productService.deleteCategoryByID(params);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createCategoryThunk = createAsyncThunk<
  undefined,
  { category_name: string },
  Types.ThunkAPI<ActionError>
>('category/thunk/create', async (params, { rejectWithValue }) => {
  try {
    const { data } = await productService.createCategory(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
