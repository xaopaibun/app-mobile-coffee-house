export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  auth_token: string;
}

export interface LoginResponseError {
  errors: string[];
}
