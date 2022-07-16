import axios from 'axios';
import mock from './mock';

// import {getToken} from './token';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

mock(instance);
// instance.interceptors.request.use(
//   async (config) => {
//     config.headers.accept = 'application/json';
//     const accessToken = await getToken();
//     config.headers = {
//       ...config.headers,
//       Authorization: `Bearer ${accessToken}`,
//     };
//     return config;
//   },
//   (error) => {
//     delete axios.defaults.headers.common.Authorization;
//     Promise.reject(error);
//   },
// );

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error(error);
//     return Promise.reject(error);
//   },
// );

export default instance;
