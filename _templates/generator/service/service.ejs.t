---
to: src/services/<%= h.changeCase.camelCase(name) %>.service.ts
---
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import * as Types from 'types';
import { instanceMock } from 'libs';

class <%= h.inflection.camelize(name) %>Service implements Types.RestfulApiService {
  protected _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  findAll(params: Types.FindAll<%= h.inflection.camelize(name) %>Req): AxiosPromise<Types.FindAll<%= h.inflection.camelize(name) %>Res> {
    const request: AxiosRequestConfig = {};
    return this._axios(request);
  }

  // getOne(id: string, params: Types.GetOne<%= h.inflection.camelize(name) %>Req): AxiosPromise<Types.GetOne<%= h.inflection.camelize(name) %>Res> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }

  // create(data: Types.Create<%= h.inflection.camelize(name) %>Req): AxiosPromise<Types.Create<%= h.inflection.camelize(name) %>Res> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }

  // update(id: string | number, data: Types.Update<%= h.inflection.camelize(name) %>Req): AxiosPromise<Types.Update<%= h.inflection.camelize(name) %>Res> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }

  // patch(id: string | number, data: Types.Patch<%= h.inflection.camelize(name) %>Req): AxiosPromise<Types.Patch<%= h.inflection.camelize(name) %>Res> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }

  // remove(id: string | number, params: Types.Remove<%= h.inflection.camelize(name) %>Req): AxiosPromise<Types.Remove<%= h.inflection.camelize(name) %>Res> {
  //   const request: AxiosRequestConfig = {};
  //   return this._axios(request);
  // }
}

export const <%= h.changeCase.camelCase(name) %>Service = new <%= h.inflection.camelize(name) %>Service(instanceMock);
