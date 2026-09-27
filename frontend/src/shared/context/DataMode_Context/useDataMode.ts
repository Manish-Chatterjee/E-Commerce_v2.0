import { useContext } from "react";
import { DataModeContext } from "./DataModeContext";

export const useDataMode = () => {
  const context = useContext(DataModeContext);

  if (!context) {
    throw new Error("useDataMode must be used inside DataModeProvider");
  }

  return context;
};