import type { Product } from "../types/ProductInfoTypes";

export const getProductById = async (productId: string): Promise<Product> => {
  const response = await fetch("/data/products.json");

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const products: Product[] = await response.json();

  const product = products.find((product) => product.productId === productId);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};
