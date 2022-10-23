import {
  createSlice,
  //createEntityAdapter
} from '@reduxjs/toolkit';
import { Order } from 'types';
import { getListOrderThunk, getOrderDetailByIDThunk } from './thunk';

export type InitialState = {
  loading: boolean;
  listOrder: Array<Order>;
  totalResults: number;
  orderDetail: Order;
};

const initialState: InitialState = {
  loading: false,
  listOrder: [],
  totalResults: 0,
  orderDetail: {} as Order,
};

export const orderSlice = createSlice({
  name: 'order-page',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListOrderThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderDetailByIDThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getListOrderThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.listOrder = action.payload.results;
      state.totalResults = action.payload.totalResults;
    });
    builder.addCase(getOrderDetailByIDThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.orderDetail = action.payload.data;
    });

    builder.addCase(getListOrderThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getOrderDetailByIDThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export const {} = orderSlice.actions;

export default orderSlice.reducer;
