import { createContext, useContext, useState } from "react";

export interface AppContextValue {
  iconId: string;
  setIconId: (id: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [iconId, setIconId] = useState("GitHub");

  return (
    <AppContext.Provider
      value={{
        iconId,
        setIconId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
