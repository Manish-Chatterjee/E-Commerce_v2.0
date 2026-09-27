import { apiClient } from "@/api/apiClient";
import type { Order } from "../types/OrderTypes";

export const getOrders = async (): Promise<Order[]> => {
  return apiClient<Order[]>("/orders");
};
