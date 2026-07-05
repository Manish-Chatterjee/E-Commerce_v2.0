// CurrencyContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type Currency = "USD" | "INR" | "EUR";

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>(
    (localStorage.getItem("currency") as Currency) || "USD"
  );

  const updateCurrency = (cur: Currency) => {
    setCurrency(cur);
    localStorage.setItem("currency", cur);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used inside provider");
  return context;
};