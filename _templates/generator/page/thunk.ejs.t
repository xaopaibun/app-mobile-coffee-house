---
to: src/pages<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/thunk.ts
---
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Types from 'types';

//TODO import it from @types
interface ActionRequest {}
interface ActionResponse {}
interface ActionError {}

export const action = createAsyncThunk<ActionResponse, ActionRequest, Types.ThunkAPI<ActionError>>(
  '<%= h.changeCase.camel(name) %>/thunk/action',
  async () => {
    //TODO code fetch api here
  }
);
