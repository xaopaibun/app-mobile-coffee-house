import {RootState} from 'types';

export const authSelectors = (state: RootState) => state.containers.app.auth;
