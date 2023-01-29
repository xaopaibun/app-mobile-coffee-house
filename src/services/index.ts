import {axios} from 'utils';
import Auth from './auth';
import Home from './home';
import Order from './order';

export const authService = new Auth(axios);
export const homeService = new Home(axios);
export const orderService = new Order(axios);
