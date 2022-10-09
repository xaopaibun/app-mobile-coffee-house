import axios from 'axios';
import configs from 'configs';
import { mockAdapter } from './mock-adapter';

export const instance = axios.create({
  baseURL: configs.API_URL,
});

instance.interceptors.request.use(
  (config) => {
    //TODO add accessToken here
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    //TODO handle global api error
    return Promise.reject(error);
  }
);

export const instanceMock = axios.create({
  baseURL: configs.API_URL,
});

mockAdapter(instanceMock);
