import { useState, type ReactNode } from "react";
import { CurrencyContext, type Currency } from "./CurrencyContext";

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