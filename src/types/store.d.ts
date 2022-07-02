import {AxiosError} from 'axios';
import store from 'store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface ThunkAPI<E = Error> {
  state?: RootState;
  dispatch?: AppDispatch;
  extra?: unknown;
  rejectValue?: AxiosError<E>;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
}
