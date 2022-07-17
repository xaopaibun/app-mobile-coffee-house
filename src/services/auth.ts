import {AxiosInstance, AxiosPromise} from 'axios';
import {LoginRequest, LoginResponse, SignUpRequest} from 'types';

class Auth {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  login(data: LoginRequest): AxiosPromise<LoginResponse> {
    return this.axios({
      method: 'POST',
      url: '/auth/login',
      data,
    });
  }

  signup(data: SignUpRequest): AxiosPromise<LoginResponse> {
    return this.axios({
      method: 'POST',
      url: '/auth/signup',
      data,
    });
  }
}
export default Auth;
