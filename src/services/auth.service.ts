import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { instance } from 'libs';
import * as Types from 'types';

class AuthService implements Types.AuthService {
  protected _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  signIn(data: Types.SignInReq): AxiosPromise<Types.SignInRes> {
    const request: AxiosRequestConfig = {
      url: '/auth/login',
      method: 'POST',
      data,
    };
    return this._axios(request);
  }

  signUp(data: Types.SignUpReq): AxiosPromise<Types.SignUpRes> {
    const request: AxiosRequestConfig = {};
    return this._axios(request);
  }
}

export const authService = new AuthService(instance);
