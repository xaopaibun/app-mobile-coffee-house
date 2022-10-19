import {
  BaseResponse,
  CategoryType,
  ProductItem,
  RequestBaseParams,
} from 'src/types/home';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {homeService} from 'services';
import * as TYPE from 'types';

export const getDataProduct = createAsyncThunk<
  BaseResponse<ProductItem>,
  RequestBaseParams,
  TYPE.ThunkAPI<TYPE.ResponseError>
>('product/thunk/list-products', async (params, {rejectWithValue}) => {
  try {
    const {data} = await homeService.getData(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getDataCategory = createAsyncThunk<
  BaseResponse<CategoryType>,
  RequestBaseParams,
  TYPE.ThunkAPI<TYPE.ResponseError>
>('product/thunk/category', async (params, {rejectWithValue}) => {
  try {
    const {data} = await homeService.getDataCategory(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getProductByCategory = createAsyncThunk<
  BaseResponse<ProductItem>,
  RequestBaseParams,
  TYPE.ThunkAPI<TYPE.ResponseError>
>('product/thunk/list-product-category', async (params, {rejectWithValue}) => {
  try {
    const {data} = await homeService.getProductByCategory(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const orderProduct = createAsyncThunk<
  BaseResponse<ProductItem>,
  RequestBaseParams,
  TYPE.ThunkAPI<TYPE.ResponseError>
>('product/thunk/order', async (params, {rejectWithValue}) => {
  try {
    const {data} = await homeService.getProductByCategory(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
