import { apiClient } from "@/api/apiClient";
import type { Order } from "@/features/orderHistory/types/OrderTypes";
import type { CartItem } from "@/shared/context/Cart_Context/CartTypes";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CartResponse = {
  id: number;
  items: CartItem[];
};

export const getCartItem = async (): Promise<CartItem[]> => {
  //   const response = await fetch(`${BASE_URL}/cart`, {
  //     credentials: "include",
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch cart");
  //   }
  //   // return response.json();

  //     const data = await response.json();

  // console.log("BACKEND CART DATA:", data);
  // console.log("IS ARRAY:", Array.isArray(data));

  // return data.items;

  // (OR)

  const data = await apiClient<CartResponse>("/cart");
  return data.items;
};

export const placeOrder = async (): Promise<Order> => {
  return apiClient<Order>("/orders", {
    method: "POST",
  });
};

export const addToCart = async (variantId: string): Promise<CartItem[]> => {
  const data = await apiClient<CartResponse>(
    `/cart/items?variantId=${variantId}&quantity=1`,
    {
      method: "POST",
    },
  );

  return data.items;
};

export const removeFromCart = async (
  variantId: string,
): Promise<CartItem[]> => {
  const data = await apiClient<CartResponse>(`/cart/items/${variantId}`, {
    method: "DELETE",
  });

  return data.items;
};

export const updateQuantity = async (
  variantId: string,
  quantity: number,
): Promise<CartItem[]> => {
  const data = await apiClient<CartResponse>(
    `/cart/items/${variantId}?quantity=${quantity}`,
    {
      method: "PATCH",
    },
  );

  return data.items;
};

export const clearCart = async (): Promise<CartItem[]> => {
  const data = await apiClient<CartResponse>(`/cart`, {
    method: "DELETE",
  });

  return data.items;
};
