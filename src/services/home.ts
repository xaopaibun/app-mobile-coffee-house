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
      url: '/products',
    });
  }

  getDataCategory(): AxiosPromise<Array<CategoryType>> {
    return this.axios({
      method: 'GET',
      url: '/categorys',
    });
  }

  getProductByCategory(category: string): AxiosPromise<Array<ProductItem>> {
    return this.axios({
      method: 'GET',
      url: `/categorys/${category}`,
    });
  }
}
export default Home;
