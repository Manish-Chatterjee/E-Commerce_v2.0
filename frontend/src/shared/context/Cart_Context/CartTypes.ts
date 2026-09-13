import type { Order } from "@/features/orderHistory/types/OrderTypes";
import type { Product, ProductVariant } from "@/features/ProductDetails/types/ProductInfoTypes";

// CartTypes.ts
// export type CartItem = {
//   id?: number;
//   productName: string;
//   price: number;
//   quantity: number;
//   img: string;
// }; is your old frontend/localStorage cart model.

export type CartItem = {
  id: number;
  product: Product;
  variant: ProductVariant;
  quantity: number;
};  // is your new backend cart model.

// export type CartContextType = {
//   cart: CartItem[];
//   cartCount: number;
//   addToCart: (id?: number) => void;
//   removeFromCart: (id?: number) => void;
//   clearCart: () => void;
//   incrementQuantity: (id?: number) => void;
//   decrementQuantity: (id?: number) => void;
// };




export type CartContextType = {
  cart: CartItem[];
  cartCount: number;

  addToCart: (variantId: string) => Promise<void>;

  removeFromCart: (variantId: string) => Promise<void>;

  clearCart: () => Promise<void>;

  incrementQuantity: (variantId: string) => void;

  decrementQuantity: (variantId: string) => void;

  placeOrder: () => Promise<Order | undefined>;
};