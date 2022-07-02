import {AxiosInstance} from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, {delayResponse: 2000});

  mock.onPost('/sign_in').reply(200, {
    auth_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  });
};
