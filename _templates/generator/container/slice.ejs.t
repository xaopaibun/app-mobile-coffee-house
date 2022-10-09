---
to: src/containers<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/slice.ts
---
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

export const <%= h.changeCase.camel(name) %>Slice = createSlice({
  name: '<%= h.changeCase.camel(name) %>-container',
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

// export const {} = <%= h.changeCase.camel(name) %>Slice.actions;

export default <%= h.changeCase.camel(name) %>Slice.reducer;
