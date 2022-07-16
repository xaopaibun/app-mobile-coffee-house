export interface ProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  favorites?: boolean;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quatity: number;
}

export interface CategoryType {
  id: number;
  label: string;
  name: string;
}
