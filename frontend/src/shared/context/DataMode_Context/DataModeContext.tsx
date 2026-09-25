import { createContext } from "react";

export type DataMode = "frontend" | "fullstack";

type DataModeContextType = {
  mode: DataMode;
  setMode: React.Dispatch<React.SetStateAction<DataMode>>;
};

export const DataModeContext = createContext<
  DataModeContextType | undefined
>(undefined);