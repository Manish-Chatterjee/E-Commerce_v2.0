import { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used inside provider");
  return context;
};