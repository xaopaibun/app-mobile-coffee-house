import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { instance } from 'libs';
import * as Types from 'types';

class ProductService {
  protected _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  getListProduct(params: Types.BaseParams): AxiosPromise<Types.ResponseBase<Types.Product>> {
    const request: AxiosRequestConfig = {
      url: '/product/list-products',
      method: 'GET',
      params,
    };
    return this._axios(request);
  }

  getListProductByCategoryID(id: string): AxiosPromise<Array<Types.Product>> {
    const request: AxiosRequestConfig = {
      url: `/product/category_id/${id}`,
      method: 'GET',
    };
    return this._axios(request);
  }

  getListCategory(params?: Types.BaseParams): AxiosPromise<Types.ResponseBase<Types.Category>> {
    const request: AxiosRequestConfig = {
      url: '/category/getdata',
      method: 'GET',
      params,
    };
    return this._axios(request);
  }

  createProduct(data: FormData): AxiosPromise<Types.ResponseBase<Types.Product>> {
    const request: AxiosRequestConfig = {
      url: '/product/create-product',
      method: 'POST',
      data,
    };
    return this._axios(request);
  }

  deleteProductByID(id: string): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: `/product/delete-product/${id}`,
      method: 'DELETE',
    };
    return this._axios(request);
  }

  deleteCategoryByID(id: string): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: `/category/delete-category/${id}`,
      method: 'DELETE',
    };
    return this._axios(request);
  }

  createCategory(data: { category_name: string }): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: '/category/create-category',
      method: 'POST',
      data,
    };
    return this._axios(request);
  }

  getOrderStatistic(): AxiosPromise<Types.OrderStatistic> {
    const request: AxiosRequestConfig = {
      url: '/order/statistic',
      method: 'GET',
    };
    return this._axios(request);
  }

  getDetalProductByID(id: string): AxiosPromise<Types.Product> {
    const request: AxiosRequestConfig = {
      url: `/product/${id}`,
      method: 'GET',
    };
    return this._axios(request);
  }

  updateProductByID(id: string, data: FormData | unknown): AxiosPromise<undefined> {
    const request: AxiosRequestConfig = {
      url: `/product/${id}`,
      method: 'PUT',
      data,
    };
    return this._axios(request);
  }
}

export const productService = new ProductService(instance);
