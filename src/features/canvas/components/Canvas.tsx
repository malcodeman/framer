import * as FeatherIcons from "react-feather";
import { useApp } from "../../../context/AppContext";

type FeatherIcon = React.FC<{ style?: React.CSSProperties }> & {
  displayName?: string;
};

function Canvas() {
  const { iconId, color, width, height, opacity, rotation, blur } = useApp();

  const style: React.CSSProperties = {
    color,
    width,
    height,
    opacity,
    transform: `rotate(${rotation}deg)`,
    filter: `blur(${blur}px)`,
    transition: "all 0.2s ease",
  };

  const icons = Object.values(FeatherIcons) as FeatherIcon[];
  const Element =
    icons.find((item) => item.displayName === iconId) ?? FeatherIcons.GitHub;

  return (
    <div className="flex items-center justify-center overflow-y-auto bg-neutral-200 dark:bg-neutral-800 transition-colors duration-200">
      <Element style={style} />
    </div>
  );
}

export default Canvas;
