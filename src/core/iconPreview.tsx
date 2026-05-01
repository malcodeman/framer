import type { CSSProperties } from "react";
import ReactDOMServer from "react-dom/server";
import { fallbackIcon, icons } from "./icons";

export interface IconPreviewState {
  iconId: string;
  color: string;
  width: number;
  height: number;
  opacity: number;
  rotation: number;
  blur: number;
}

interface IconStyleOptions {
  transition?: string;
}

export function getIconComponent(iconId: string) {
  return icons.find((item) => item.name === iconId)?.Component ?? fallbackIcon;
}

export function createIconStyle(
  { color, width, height, opacity, rotation, blur }: IconPreviewState,
  { transition }: IconStyleOptions = {},
): CSSProperties {
  return {
    color,
    width,
    height,
    opacity,
    transform: `rotate(${rotation}deg)`,
    filter: `blur(${blur}px)`,
    ...(transition ? { transition } : {}),
  };
}

export function renderIconSvg(state: IconPreviewState) {
  const Element = getIconComponent(state.iconId);

  return ReactDOMServer.renderToStaticMarkup(
    <Element style={createIconStyle(state)} />,
  );
}
