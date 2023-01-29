import {AxiosInstance, AxiosPromise} from 'axios';

class Order {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  createOrder(data: any): AxiosPromise<any> {
    return this.axios({
      method: 'POST',
      url: '/order/create',
      data,
    });
  }
}
export default Order;
