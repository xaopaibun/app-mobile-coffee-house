import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import * as Types from 'types';
import { instance } from 'libs';

export default class UserService implements Types.RestfulApiService {
  protected _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  findAll(params: Types.FindAllUserReq): AxiosPromise<Types.FindAllUserRes> {
    const request: AxiosRequestConfig = {};
    return this._axios(request);
  }

  getListUser(params: Types.BaseParams): AxiosPromise<Types.ResponseBase<Types.User>> {
    const request: AxiosRequestConfig = {
      url: '/users',
      method: 'GET',
      params,
    };
    return this._axios(request);
  }

  createUser(data: FormData): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: '/user',
      method: 'POST',
      data,
    };
    return this._axios(request);
  }

  deleteUserByID(id: string): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: `/users/${id}`,
      method: 'DELETE',
    };
    return this._axios(request);
  }

  updateUserByID(id: string): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: `/users/${id}`,
      method: 'PATCH',
    };
    return this._axios(request);
  }
}

export const userService = new UserService(instance);
