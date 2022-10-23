import { createAsyncThunk } from '@reduxjs/toolkit';
import { orderService } from 'services';
import * as Types from 'types';

interface ActionError {}

export const getListOrderThunk = createAsyncThunk<
  Types.ResponseBase<Types.Order>,
  Types.BaseParams,
  Types.ThunkAPI<ActionError>
>('order/thunk/getOrder', async (params, { rejectWithValue }) => {
  try {
    const { data } = await orderService.getListOrder(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getOrderDetailByIDThunk = createAsyncThunk<
  {
    data: Types.Order;
    message: string;
  },
  string,
  Types.ThunkAPI<ActionError>
>('order/thunk/detail', async (params, { rejectWithValue }) => {
  try {
    const { data } = await orderService.getOrderDetailByID(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const updateOrderByIDThunk = createAsyncThunk<
  undefined,
  { id: string; data: Types.Order },
  Types.ThunkAPI<ActionError>
>('order/thunk/update', async (params, { rejectWithValue }) => {
  try {
    const { data } = await orderService.updateOrderByID(params.id, params.data);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteOrderByIDThunk = createAsyncThunk<
  undefined,
  string,
  Types.ThunkAPI<ActionError>
>('dashboard/thunk/Category', async (params, { rejectWithValue }) => {
  try {
    const { data } = await orderService.deleteOrderByID(params);
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});
