export const getCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  return cart.length;
};

//not used