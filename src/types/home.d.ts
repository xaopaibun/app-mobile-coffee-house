export interface ProductItem {
  _id: number;
  name: string;
  price: number;
  content: string;
  category: string;
  image: string;
  star: number;
  favorites?: boolean;
  shipping: boolean;
  category_id: string;
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
  _id: number;
}
