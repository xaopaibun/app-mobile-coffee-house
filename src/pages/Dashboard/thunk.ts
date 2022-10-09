import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Types from 'types';

//TODO import it from @types
interface ActionRequest {}
interface ActionResponse {}
interface ActionError {}

export const action = createAsyncThunk<ActionResponse, ActionRequest, Types.ThunkAPI<ActionError>>(
  'dashboard/thunk/action',
  async () => {
    //TODO code fetch api here
  }
);
