import {AxiosInstance, AxiosPromise} from 'axios';
import {
  BaseResponse,
  CategoryType,
  ProductItem,
  RequestBaseParams,
} from 'src/types/home';

class Home {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  getData(params: RequestBaseParams): AxiosPromise<BaseResponse<ProductItem>> {
    return this.axios({
      method: 'GET',
      url: '/product/list-products',
      params,
    });
  }

  getDataCategory(
    params: RequestBaseParams,
  ): AxiosPromise<BaseResponse<CategoryType>> {
    return this.axios({
      method: 'GET',
      url: '/category/getdata',
      params,
    });
  }

  getProductByCategory(
    params: RequestBaseParams,
  ): AxiosPromise<BaseResponse<ProductItem>> {
    return this.axios({
      method: 'GET',
      url: '/product/list-products',
      params,
    });
  }

  orderProduct(
    params: RequestBaseParams,
  ): AxiosPromise<BaseResponse<ProductItem>> {
    return this.axios({
      method: 'GET',
      url: '/product/list-products',
      params,
    });
  }
}
export default Home;
