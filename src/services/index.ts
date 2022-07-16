import {axios} from 'utils';
import Auth from './auth';
import Home from './home';

export const authService = new Auth(axios);
export const homeService = new Home(axios);
