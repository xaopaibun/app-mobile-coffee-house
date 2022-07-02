import {AxiosInstance, AxiosPromise} from 'axios';
import {LoginRequest, LoginResponse} from 'types';

class Auth {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  login(data: LoginRequest): AxiosPromise<LoginResponse> {
    return this.axios({
      method: 'POST',
      url: '/sign_in',
      data,
    });
  }
}

export default Auth;
