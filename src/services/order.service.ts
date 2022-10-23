import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { instance } from 'libs';
import * as Types from 'types';

class OrderService {
  protected _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  getListOrder(params: Types.BaseParams): AxiosPromise<Types.ResponseBase<Types.Order>> {
    const request: AxiosRequestConfig = {
      url: '/order/list-order',
      method: 'GET',
      params,
    };
    return this._axios(request);
  }

  getOrderDetailByID(id: string): AxiosPromise<{
    data: Types.Order;
    message: string;
  }> {
    const request: AxiosRequestConfig = {
      url: `/order/${id}`,
      method: 'GET',
    };
    return this._axios(request);
  }

  updateOrderByID(id: string, data: Types.Order): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: `/order/${id}`,
      method: 'PUT',
      data,
    };
    return this._axios(request);
  }

  deleteOrderByID(id: string): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: `/order/${id}`,
      method: 'DELETE',
    };
    return this._axios(request);
  }
}

export const orderService = new OrderService(instance);
