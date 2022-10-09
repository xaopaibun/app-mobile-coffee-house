import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mockAdapter = (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, { delayResponse: 1500 });

  //TODO mock req/res data here
  mock.onPost('/sign-in', {});
  mock.onPost('/sign-up', {});
};
