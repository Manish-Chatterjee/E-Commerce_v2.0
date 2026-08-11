import { apiClient } from "@/api/apiClient";
import type { Product } from "../types/product";

export const getAllProducts = () => {
  return apiClient<Product[]>("/products/allProducts");
};

// export const getProductById = (id: string) =>
//   apiClient<Product>(`/products/${id}`);

// export const createProduct = (product: Product) =>
//   apiClient<Product>("/products", {
//     method: "POST",
//     body: JSON.stringify(product),
//   });

export const updateProduct = (id: number, product: Product) =>
  apiClient<Product>(`/products/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
  });

export const updateWishlist = (id: number, wishlist: boolean) =>
  apiClient<Product>(`/products/${id}/wishlist`, {
    method: "PATCH",
    body: JSON.stringify({ wishlist }),
  });

// export const deleteProduct = (id: string) =>
//   apiClient<void>(`/products/${id}`, {
//     method: "DELETE",
//   });
