export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
  effects: string[];
  ingredients: string[];
  description: string;
  weight: number;
  package_width: number | null;
  package_height: number | null;
  package_depth: number | null;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  username: string;
  isAdmin: boolean;
}

export interface Order {
  id: number;
  user_id: number;
  total_price: number;
  status: string;
  created_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  product_name: string;
  product_price: number;
  quantity: number;
}
