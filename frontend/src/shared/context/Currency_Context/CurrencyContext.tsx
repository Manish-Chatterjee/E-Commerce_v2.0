// CurrencyContext.tsx
import { createContext } from "react";

export type Currency = "USD" | "INR" | "EUR";

export type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

export const CurrencyContext = createContext<CurrencyContextType | null>(null);



