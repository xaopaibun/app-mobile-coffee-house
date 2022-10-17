export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface LoginResponse {
  tokens: {
    access: {
      token: string;
    };
  };
  user: User;
}

export interface User {
  role: 'user';
  _id: string;
  email: string;
  name: string;
  avatar: string;
  sex: 1 | 0;
  address: string;
  phone: string;
  age: number;
}

export interface ResponseError {}

export interface SignUpRequest {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}
