import { useEffect, useState } from "react";
import type { ReactNode } from "react";
// import Products from "../../sampleData/shopPage.json";
import { CartContext } from "./CartContext";
import type { CartContextType, CartItem } from "./CartTypes"; // type-only import
import { useDataMode } from "../DataMode_Context/useDataMode";
import { getCartService } from "@/features/cart/services/cartService";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // const [cart, setCart] = useState<CartItem[]>(() => {
  //   try {
  //     const storedCart = localStorage.getItem("cart");
  //     return storedCart ? (JSON.parse(storedCart) as CartItem[]) : [];
  //   } catch {
  //     return [];
  //   }
  // });
  const [cart, setCart] = useState<CartItem[]>([]);

  console.log(cart, "cart");

  const { mode } = useDataMode();

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartService = getCartService(mode);
        const data = await cartService.getCartItem();
        // setCart(data.items || []);

        console.log("DATA FROM SERVICE:", data);
        console.log("IS ARRAY:", Array.isArray(data));

        setCart(data || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [mode]);

  //  ✅ Place Order
  const placeOrder = async () => {
    try {
      // const response = await fetch(`${BASE_URL}/orders`, {
      //   method: "POST",
      //   credentials: "include",
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to place order");
      // }

      const cartService = getCartService(mode);
      const order = await cartService.placeOrder();

      setCart([]);

      return order;
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  // ✅ Add To Cart
  // const addToCart = (id?: number) => {
  //   const existingItem = cart.find((item) => item.id === id);
  //   if (existingItem) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
  //       ),
  //     );
  //     return;
  //   }

  //   const product = Products.find((item) => item.id === id);
  //   if (!product) return;

  //   const newItem: CartItem = {
  //     id: product.id,
  //     productName: product.productName,
  //     price: product.price,
  //     quantity: 1,
  //     img: product.productImages[0],
  //   };

  //   setCart([...cart, newItem]);
  // };
  const addToCart = async (variantId: string) => {
    try {
      // const response = await fetch(
      //   `${BASE_URL}/cart/items?variantId=${variantId}&quantity=1`,
      //   {
      //     method: "POST",
      //     credentials: "include",
      //   },
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to add item to cart");
      // }

      const cartService = getCartService(mode);
      const data = await cartService.addToCart(variantId);

      // setCart(data.items || []);
      setCart(data || []);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // ✅ Remove From Cart
  // const removeFromCart = (id: number | undefined) =>
  //   setCart(cart.filter((item) => item.id !== id));
  const removeFromCart = async (variantId: string) => {
    try {
      // const response = await fetch(`${BASE_URL}/cart/items/${variantId}`, {
      //   method: "DELETE",
      //   credentials: "include",
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to remove item");
      // }

      const cartService = getCartService(mode);
      const data = await cartService.removeFromCart(variantId);

      setCart(data);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // ✅ Update Cart
  const updateQuantity = async (variantId: string, quantity: number) => {
    try {
      // const response = await fetch(
      //   `${BASE_URL}/cart/items/${variantId}?quantity=${quantity}`,
      //   {
      //     method: "PATCH",
      //     credentials: "include",
      //   },
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to update quantity");
      // }

      const cartService = getCartService(mode);
      const data = await cartService.updateQuantity(variantId, quantity);

      setCart(data);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // ✅ Clear Cart
  // const clearCart = () => setCart([]);
  const clearCart = async () => {
    try {
      // const response = await fetch(`${BASE_URL}/cart`, {
      //   method: "DELETE",
      //   credentials: "include",
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to clear cart");
      // }

      const cartService = getCartService(mode);
      const data = await cartService.clearCart();

      setCart(data);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  // ✅ Cart Item Count
  const cartCount = cart.reduce((total, item) => total + item?.quantity, 0);
  console.log(cartCount, "cartCount");

  // ✅ Increment Quantity
  // const incrementQuantity = (id: number | undefined) => {
  //   setCart((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
  //     ),
  //   );
  // };
  const incrementQuantity = (variantId: string) => {
    const item = cart.find((item) => item.variant.variantId === variantId);

    if (item) {
      updateQuantity(variantId, item.quantity + 1);
    }
  };

  // ✅ Decrement Quantity
  // const decrementQuantity = (id: number | undefined) => {
  //   setCart(
  //     (prev) =>
  //       prev
  //         .map((item) =>
  //           item.id === id && item.quantity > 1
  //             ? { ...item, quantity: item.quantity - 1 }
  //             : item,
  //         )
  //         .filter((item) => item.quantity > 0), // remove if 0
  //   );
  // };
  const decrementQuantity = (variantId: string) => {
    const item = cart.find((item) => item.variant.variantId === variantId);

    if (item && item.quantity > 1) {
      updateQuantity(variantId, item.quantity - 1);
    }
  };

  const value: CartContextType = {
    cart,
    cartCount,
    addToCart,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    placeOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
