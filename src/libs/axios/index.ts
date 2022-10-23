import axios from 'axios';
import configs from 'configs';
// import { logout } from 'containers/Auth/slice';
// import { mockAdapter } from './mock-adapter';

export const instance = axios.create({
  baseURL: configs.API_URL,
});
instance.interceptors.request.use(
  (defaultConfig) => {
    const accessToken = localStorage.getItem('coffee-house-token');
    defaultConfig.headers = {
      ...defaultConfig.headers,
      Authorization: `Bearer ${accessToken}`,
    };
    return defaultConfig;
  },
  (error) => {
    delete axios.defaults.headers.common['Authorization'];
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const injectStore = (store: any) => {
//   instance.interceptors.request.use(
//     (defaultConfig) => {
//       console.log('acb');
//       const accessToken = localStorage.getItem('coffee-house-token');
//       defaultConfig.headers = {
//         ...defaultConfig.headers,
//         Authorization: `Bearer ${accessToken}`,
//       };
//       return defaultConfig;
//     },
//     (error) => {
//       delete axios.defaults.headers.common['Authorization'];
//       Promise.reject(error);
//     }
//   );

//   instance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response.status === 401) {
//         store.dispatch(logout());
//       }
//       return Promise.reject(error);
//     }
//   );
// };

// export default injectStore;
// export const instanceMock = axios.create({
//   baseURL: configs.API_URL,
// });

// mockAdapter(instanceMock);
