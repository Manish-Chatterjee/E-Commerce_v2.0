import type {
  Product,
  ProductVariant,
} from "@/features/ProductDetails/types/ProductInfoTypes";

export type OrderItem = {
  id: number;
  quantity: number;
  price: number;
  product: Product;
  variant: ProductVariant;
  image: string;
};

export type Order = {
  id: number;
  orderNumber: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;

  items: OrderItem[];
};
