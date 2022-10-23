export interface User {
  avatar: string;
  name: string;
  email: string;
  role: 'admin';
}

export interface FindAllUserReq {}
export interface FindAllUserRes {}
export interface FindAllUserErr {}

export interface GetOneUserReq {}
export interface GetOneUserRes {}
export interface GetOneUserErr {}

export interface CreateUserReq {}
export interface CreateUserRes {}
export interface CreateUserErr {}

export interface UpdateUserReq {}
export interface UpdateUserRes {}
export interface UpdateUserErr {}

export interface PatchUserReq {}
export interface PatchUserRes {}
export interface PatchUserErr {}

export interface RemoveUserReq {}
export interface RemoveUserRes {}
export interface RemoveUserErr {}
