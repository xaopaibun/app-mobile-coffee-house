export interface ProductItem {
  _id: number;
  name: string;
  price: number;
  content: string;
  category: string;
  image: Array<string>;
  category_id: string;
  variant: Array<{
    name: string;
    option: Array<{value: string; price: number; _id: string}>;
  }>;
}

export interface CartItem {
  _id: number;
  name: string;
  price: number;
  image: string;
  quatity: number;
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
