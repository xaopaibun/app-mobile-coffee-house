export interface ProductItem {
  _id: string;
  name: string;
  price: number;
  content: string;
  category: string;
  length: number;
  width: number;
  favorites: boolean;
  height: number;
  weight: number;
  image: Array<string>;
  category_id: string;
  variant: Array<{
    name: string;
    option: Array<{value: string; price: number; _id: string}>;
  }>;
}

export interface CartItem {
  _id: string;
  option: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  length: number;
  weight: number;
  width: number;
  height: number;
}

export interface BaseResponse<T> {
  results: Array<T>;
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}
export interface CategoryType {
  category_name: string;
  _id: string;
}

export interface RequestBaseParams {
  limit: number;
  page: number;
  category_id?: string;
}
