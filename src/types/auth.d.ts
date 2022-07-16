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
  auth_token: string;
}

export interface ResponseError {}

export interface SignUpRequest {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}
