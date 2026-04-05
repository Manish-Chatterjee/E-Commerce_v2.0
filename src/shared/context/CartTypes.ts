// CartTypes.ts
export type CartItem = {
  id?: number;
  productName: string;
  price: number;
  quantity: number;
  img: string;
};

export type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  addToCart: (id?: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
};
