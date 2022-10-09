import {
  createSlice,
  //createEntityAdapter
} from '@reduxjs/toolkit';

export type InitialState = {};

/*
//Note example for create entity
https://redux-toolkit.js.org/usage/usage-with-typescript#createentityadapter

const productsAdapter = createEntityAdapter<Product>();

const initialState: InitialState = productsAdapter.getInitialState();
*/

const initialState: InitialState = {};

export const dashboardSlice = createSlice({
  name: 'dashboard-page',
  initialState,
  reducers: {},
  extraReducers(builder) {
    /*
    Note example for extra reducers
    https://redux-toolkit.js.org/usage/usage-with-typescript#createasyncthunk

    builder.addCase(action.fulfilled, (state, { payload }) => {
      state.entities[payload.id] = payload
    })
    */
  },
});

// export const {} = dashboardSlice.actions;

export default dashboardSlice.reducer;
