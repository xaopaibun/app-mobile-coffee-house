import {BaseResponse, CategoryType, ProductItem} from 'src/types/home';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {homeService} from 'services';
import * as TYPE from 'types';

export const getDataProduct = createAsyncThunk<
  BaseResponse<ProductItem>,
  undefined,
  TYPE.ThunkAPI<TYPE.ResponseError>
>('product/thunk/list-product', async ({rejectWithValue}: any) => {
  try {
    const {data} = await homeService.getData();
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getDataCategory = createAsyncThunk<
  BaseResponse<CategoryType>,
  undefined,
  TYPE.ThunkAPI<TYPE.ResponseError>
>('product/thunk/category', async (_params, {rejectWithValue}: any) => {
  try {
    const {data} = await homeService.getDataCategory();
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getProductByCategory = createAsyncThunk<
  BaseResponse<ProductItem>,
  string,
  TYPE.ThunkAPI<TYPE.ResponseError>
>(
  'product/thunk/list-product-category',
  async (req, {rejectWithValue}: any) => {
    try {
      const {data} = await homeService.getProductByCategory(req);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
