export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type OrderType = 'delivery' | 'pickup';

export interface UserInfo {
  name: string;
  address: string;
  reference?: string;
  phone?: string;
}