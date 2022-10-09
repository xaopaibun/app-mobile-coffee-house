import { AxiosPromise } from 'axios';

export interface Service {
  findOne?<Res, Req>(params: Req): AxiosPromise<Res>
  getAll?<Res, Req>(params: Req): AxiosPromise<Res>
  create?<Res, Req>(data: Req): AxiosPromise<Res>
  update?<Res, Req>(data: Req): AxiosPromise<Res>
  patch?<Res, Req>(data: Req): AxiosPromise<Res>
  delete?<Res, Req>(data: Req): AxiosPromise<Res>
}
