import { createContext, useContext, useState } from "react";

export interface AppContextValue {
  iconId: string;
  color: string;
  width: number;
  height: number;
  opacity: number;
  rotation: number;
  blur: number;
  setIconId: (id: string) => void;
  setColor: (color: string) => void;
  setWidth: (w: number) => void;
  setHeight: (h: number) => void;
  setOpacity: (o: number) => void;
  setRotation: (r: number) => void;
  setBlur: (b: number) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [iconId, setIconId] = useState("GitHub");
  const [color, setColor] = useState("#000");
  const [width, setWidth] = useState(128);
  const [height, setHeight] = useState(128);
  const [opacity, setOpacity] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [blur, setBlur] = useState(0);

  return (
    <AppContext.Provider
      value={{
        iconId,
        setIconId,
        color,
        setColor,
        width,
        setWidth,
        height,
        setHeight,
        opacity,
        setOpacity,
        rotation,
        setRotation,
        blur,
        setBlur,
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
