import {axios} from 'utils';
import Auth from './auth';

export const authService = new Auth(axios);
