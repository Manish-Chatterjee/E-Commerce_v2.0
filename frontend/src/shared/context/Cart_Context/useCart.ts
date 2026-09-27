import { useContext } from "react";
import { CartContext } from "./CartContext"; // make sure the path is correct

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be used inside a CartProvider");
  return context;
};