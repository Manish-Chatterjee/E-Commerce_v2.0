// CartContext.ts
import { createContext } from "react";
import type { CartContextType } from "./CartTypes"; // types in separate file

// Only export context (no provider component here)
export const CartContext = createContext<CartContextType | null>(null);