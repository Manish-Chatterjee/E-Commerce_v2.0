// JSON local call

import type { Product } from "../types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch("/data/products.json");

  if (!response.ok) {
    throw new Error("Failed to load local products");
  }

  return response.json();
};
