import { useState } from "react";
import { DataModeContext, type DataMode } from "./DataModeContext";

export const DataModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<DataMode>("frontend");

  return (
    <DataModeContext.Provider value={{ mode, setMode }}>
      {children}
    </DataModeContext.Provider>
  );
};
