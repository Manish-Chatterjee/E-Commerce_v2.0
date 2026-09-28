// JSON local call

import type { Product } from "../types/product";

const WISHLIST_KEY = "wishlist";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch("/data/products.json");

  if (!response.ok) {
    throw new Error("Failed to load local products");
  }

  // return response.json();
  const products: Product[] = await response.json();

  const wishlistIds: string[] = JSON.parse(
    localStorage.getItem(WISHLIST_KEY) || "[]",
  );

  return products.map((product) => ({
    ...product,
    wishlist: wishlistIds.includes(product.productId),
  }));
};

export const updateWishlist = async (
  productId: string,
  wishlist: boolean,
): Promise<Product> => {
  const response = await fetch("/data/products.json");

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const products: Product[] = await response.json();

  const wishlistIds: string[] = JSON.parse(
    localStorage.getItem(WISHLIST_KEY) || "[]",
  );

  if (wishlist) {
    if (!wishlistIds.includes(productId)) {
      wishlistIds.push(productId);
    }
  } else {
    const index = wishlistIds.indexOf(productId);

    if (index !== -1) {
      wishlistIds.splice(index, 1);
    }
  }

  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistIds));

  const product = products.find((product) => product.productId === productId);

  if (!product) {
    throw new Error("Product not found");
  }

  product.wishlist = wishlist;

  return product;
};
