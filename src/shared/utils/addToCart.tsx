//Replaced with CartContext.tsx (context api)
// not used

import Products from "../sampleData/shopPage.json";

export const addToCart = (id: number) => {
  // 1. Get existing cart
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

  // 2. Check if already exists
  const alreadyExists = existingCart.some(
    (item: any) => item.id === id
  );

  if (alreadyExists) {
    console.log("Item already in cart");
    return;
  }

  // 3. Find product
  const product = Products.find((item) => item.id === id);

  if (!product) {
    console.log("Product not found");
    return;
  }

  // 4. Add to cart
  const updatedCart = [...existingCart, product];

  // 5. Save back to localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  console.log("Added to cart");
};