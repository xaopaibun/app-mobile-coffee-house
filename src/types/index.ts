export * from './services';
export * from './redux';

export interface BaseParams {
  page: number;
  limit: number;
}

export interface ResponseBase<T> {
  results: Array<T>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface Product {
  _id: string;
  category_id: string;
  name: string;
  image: Array<File>;
  content: string;
  slug: string;
  variant: Array<VariantItem>;
}

export interface Category {
  _id: string;
  category_name: string;
}

interface OptionItem {
  price: number;
  value: string;
  inventory: boolean;
}
interface VariantItem {
  name: string;
  option: Array<OptionItem>;
}
export interface PayloadCreateProduct {
  category_id: string;
  name: string;
  image: Array<File>;
  content: string;
  slug: string;
  width: number;
  height: number;
  length: number;
  weight: number;
  variant: Array<VariantItem>;
}

export interface User {
  role: 'admin' | 'user';
  isEmailVerified: boolean;
  avatar: string;
  _id: string;
  email: string;
  name: string;
  address: string;
  age: number;
  phone: string;
  sex: number;
}
export interface OrderStatistic {
  confirm: number;
  delivery: number;
  success: number;
  cancel: number;
}
export interface Order {
  _id?: string;
  status: number;
  email: string;
  full_name: string;
  phone_number: string;
  total_money: number;
  address: string;
  payment: number;
  shipping_information: number;
  list_product: Array<{
    _id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  date: string;
}
