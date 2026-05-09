import * as FeatherIcons from "react-icons/fi";
import type { IconType } from "react-icons";

export interface IconDefinition {
  name: string;
  component: IconType;
}

function formatIconName(exportName: string) {
  const name = exportName.replace(/^Fi/, "");

  if (name === "Github") {
    return "GitHub";
  }

  return name;
}

export const iconRegistry: IconDefinition[] = Object.entries(FeatherIcons)
  .filter(([name]) => name.startsWith("Fi"))
  .map(([name, component]) => ({
    name: formatIconName(name),
    component,
  }));

export const fallbackIcon = FeatherIcons.FiGithub;
