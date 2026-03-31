import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Products from "../sampleData/shopPage.json";
import { CartContext } from "./Cart_Context";
import type { CartContextType, CartItem } from "./CartTypes"; // type-only import

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? (JSON.parse(storedCart) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id?: number) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
      return;
    }

    const product = Products.find((item) => item.id === id);
    if (!product) return;

    const newItem: CartItem = {
      id: product.id,
      productName: product.productName,
      price: product.price,
      quantity: 1,
      img: product.productImages[0],
    };

    setCart([...cart, newItem]);
  };

  const removeFromCart = (id: number) =>
    setCart(cart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const value: CartContextType = {
    cart,
    cartCount,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
