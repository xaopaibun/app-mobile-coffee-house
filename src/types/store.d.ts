import store from 'store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAPI<E> = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: E;
};
