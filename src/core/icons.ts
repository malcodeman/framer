import * as FeatherIcons from "react-icons/fi";
import type { IconType } from "react-icons";

export interface IconDefinition {
  name: string;
  Component: IconType;
}

function toIconName(exportName: string) {
  const name = exportName.replace(/^Fi/, "");

  if (name === "Github") {
    return "GitHub";
  }

  return name;
}

export const icons: IconDefinition[] = Object.entries(FeatherIcons)
  .filter(([name]) => name.startsWith("Fi"))
  .map(([name, Component]) => ({
    name: toIconName(name),
    Component,
  }));

export const fallbackIcon = FeatherIcons.FiGithub;
