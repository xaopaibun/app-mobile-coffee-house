import axios from 'axios';
import mock from './mock';
import {getToken} from './token';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

mock(instance);

instance.interceptors.request.use(async (config) => {
  config.headers.Authorization = await getToken();
  config.headers.accept = 'application/json';
  return config;
}, Promise.reject);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(`API_ERROR_URL: ${error.response.request._url}`);
    console.error(
      `API_ERROR_MESSAGE: [${error.response.status}] ${JSON.stringify(
        error.response.data || '{}',
      )}`,
    );
    return Promise.reject(error);
  },
);

export default instance;
