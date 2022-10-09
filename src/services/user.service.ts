import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import * as Types from 'types';
import { instanceMock } from 'libs';

export default class UserService implements Types.RestfulApiService {
  protected _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  findAll(params: Types.FindAllUserReq): AxiosPromise<Types.FindAllUserRes> {
    const request: AxiosRequestConfig = {};
    return this._axios(request);
  }

  // getOne(id: string, params: Types.GetOneUserReq): AxiosPromise<Types.GetOneUserRes> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }

  // create(data: Types.CreateUserReq): AxiosPromise<Types.CreateUserRes> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }

  // update(id: string | number, data: Types.UpdateUserReq): AxiosPromise<Types.UpdateUserRes> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }

  // patch(id: string | number, data: Types.PatchUserReq): AxiosPromise<Types.PatchUserRes> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }

  // remove(id: string | number, params: Types.RemoveUserReq): AxiosPromise<Types.RemoveUserRes> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }
}

export const userService = new UserService(instanceMock);
