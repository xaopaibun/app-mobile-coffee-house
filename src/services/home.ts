import {AxiosInstance, AxiosPromise} from 'axios';
import {CategoryType, ProductItem} from 'src/types/home';

class Home {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  getData(): AxiosPromise<Array<ProductItem>> {
    return this.axios({
      method: 'GET',
      url: '/product/list-products',
    });
  }

  getDataCategory(): AxiosPromise<Array<CategoryType>> {
    return this.axios({
      method: 'GET',
      url: '/category/getdata',
    });
  }

  getProductByCategory(_category: string): AxiosPromise<Array<ProductItem>> {
    return this.axios({
      method: 'GET',
      url: `/product/list-products`,
    });
  }
}
export default Home;
