import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface IconSelectionContextValue {
  selectedIconName: string;
  setSelectedIconName: (iconName: string) => void;
}

const IconSelectionContext = createContext<IconSelectionContextValue | null>(null);

export function IconSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedIconName, setSelectedIconName] = useState("GitHub");

  return (
    <IconSelectionContext.Provider
      value={{ selectedIconName, setSelectedIconName }}
    >
      {children}
    </IconSelectionContext.Provider>
  );
}

export function useIconSelection() {
  const context = useContext(IconSelectionContext);

  if (!context) {
    throw new Error("useIconSelection must be used within IconSelectionProvider");
  }

  return context;
}
