import { createAsyncThunk } from '@reduxjs/toolkit';
import { productService } from 'services';
import * as Types from 'types';

interface ActionError {}

export const getListProductThunk = createAsyncThunk<
  Types.ResponseBase<Types.Product>,
  Types.BaseParams,
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/Product', async (params, { rejectWithValue }) => {
  try {
    const { data } = await productService.getListProduct(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getListCategoryThunk = createAsyncThunk<
  Types.ResponseBase<Types.Category>,
  Types.BaseParams | undefined,
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/Category', async (params, { rejectWithValue }) => {
  try {
    const { data } = await productService.getListCategory(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteProductByIDThunk = createAsyncThunk<
  undefined,
  string,
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/Category', async (params, { rejectWithValue }) => {
  try {
    const { data } = await productService.deleteProductByID(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const createProductThunk = createAsyncThunk<
  Types.ResponseBase<Types.Product>,
  FormData,
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/create-product', async (params, { rejectWithValue }) => {
  try {
    const { data } = await productService.createProduct(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getOrderStatisticThunk = createAsyncThunk<
  Types.OrderStatistic,
  undefined,
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/create-product', async (_, { rejectWithValue }) => {
  try {
    const { data } = await productService.getOrderStatistic();
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getDetailProductThunk = createAsyncThunk<
  Types.Product,
  string,
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/detail-product', async (params, { rejectWithValue }) => {
  try {
    const { data } = await productService.getDetalProductByID(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const updateProductThunk = createAsyncThunk<
  undefined,
  { id: string; body: FormData | unknown },
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/update-product', async (params, { rejectWithValue }) => {
  try {
    const { id, body } = params;
    const { data } = await productService.updateProductByID(id, body);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getProductByCategoryIDThunk = createAsyncThunk<
  Array<Types.Product>,
  string,
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/ProductbyCategoryID', async (params, { rejectWithValue }) => {
  try {
    const { data } = await productService.getListProductByCategoryID(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
