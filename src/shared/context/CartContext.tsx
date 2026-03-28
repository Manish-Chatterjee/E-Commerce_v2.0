import { createContext, useContext, useEffect, useState } from "react";
import Products from "../sampleData/shopPage.json";

type CartItem = {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  img: string
};

type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  addToCart: (id: number | undefined) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // ✅ Sync to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart
  const addToCart = (id: number) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setCart(updatedCart);
      return;
    }

    const product = Products.find((item) => item.id === id);
    if (!product) return;

    const newItem: CartItem = {
      id: product.id,
      productName: product.productName,
      price: product.price,
      quantity: 1,
      img: product.productImages[0] // img added
    };

    setCart([...cart, newItem]);
  };

  // ✅ Count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
