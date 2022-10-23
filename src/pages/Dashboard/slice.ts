import {
  createSlice,
  //createEntityAdapter
} from '@reduxjs/toolkit';
import { Category, OrderStatistic, Product } from 'types';
import {
  getDetailProductThunk,
  getListCategoryThunk,
  getListProductThunk,
  getOrderStatisticThunk,
  getProductByCategoryIDThunk,
} from './thunk';

export type InitialState = {
  loading: boolean;
  product: Product;
  listProduct: Array<Product>;
  listCategory: Array<Category>;
  totalResults: number;
  orderStatistic: OrderStatistic;
};

const initialState: InitialState = {
  loading: false,
  product: {} as Product,
  listProduct: [],
  listCategory: [],
  totalResults: 0,
  orderStatistic: {} as OrderStatistic,
};

export const dashboardSlice = createSlice({
  name: 'dashboard-page',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListProductThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListCategoryThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderStatisticThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetailProductThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductByCategoryIDThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getListProductThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.listProduct = action.payload.results.reverse();
      state.totalResults = action.payload.totalResults;
    });
    builder.addCase(getListCategoryThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.listCategory = action.payload.results;
    });
    builder.addCase(getOrderStatisticThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.orderStatistic = action.payload;
    });
    builder.addCase(getDetailProductThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getProductByCategoryIDThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.listProduct = action.payload;
    });

    builder.addCase(getListProductThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getListCategoryThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getOrderStatisticThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getDetailProductThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getProductByCategoryIDThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export const {} = dashboardSlice.actions;

export default dashboardSlice.reducer;
