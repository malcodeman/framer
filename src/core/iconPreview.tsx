import ReactDOMServer from "react-dom/server";
import { fallbackIcon, icons } from "./icons";

export function getIconComponent(iconId: string) {
  return icons.find((item) => item.name === iconId)?.Component ?? fallbackIcon;
}

export function renderIconSvg(iconId: string) {
  const Element = getIconComponent(iconId);

  return ReactDOMServer.renderToStaticMarkup(<Element />);
}
