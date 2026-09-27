import type { Order } from "../types/OrderTypes";

const ORDERS_KEY = "orders";

export const getOrders = async (): Promise<Order[]> => {
  const storedOrders = localStorage.getItem(ORDERS_KEY);

  if (!storedOrders) {
    return [];
  }

  return JSON.parse(storedOrders) as Order[];
};
