import ReactDOMServer from "react-dom/server";
import { fallbackIcon, iconRegistry } from "./icons";

export function getIconComponent(iconName: string) {
  return (
    iconRegistry.find((icon) => icon.name === iconName)?.component ?? fallbackIcon
  );
}

export function renderIconSvg(iconName: string) {
  const Icon = getIconComponent(iconName);

  return ReactDOMServer.renderToStaticMarkup(<Icon />);
}
