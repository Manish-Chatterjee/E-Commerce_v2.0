import { apiClient } from "@/api/apiClient";
import type { Product } from "../types/ProductInfoTypes";

// export const getProductById = async (productId: string) => {
//   const response = await fetch(
//     // `${BASE_URL}/products/id/${id}`,
//     `${BASE_URL}/products/${productId}`,
//   );
//   if (!response.ok) {
//     throw new Error("Product not found");
//   }

//   return response.json();
// };

export const getProductById = async (productId: string): Promise<Product> => {
  return apiClient<Product>(`/products/${productId}`);
};
