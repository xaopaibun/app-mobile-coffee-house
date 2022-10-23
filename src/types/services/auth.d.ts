export interface SignInReq {
  email: string;
  password: string;
}
export interface SignInRes {
  tokens: {
    access: {
      token: string;
    };
  };
  user: {
    avatar: string;
    name: string;
    email: string;
    role: 'admin';
  };
}

export interface SignInErr {}

export interface SignUpReq {}
export interface SignUpRes {}
export interface SignUpErr {}

export interface UserAuth {
  avatar: string;
  name: string;
  email: string;
  role: 'admin';
}
