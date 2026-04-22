import { fallbackIcon, icons } from "../../../core/icons";
import { useApp } from "../../../context/AppContext";

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

  const Element =
    icons.find((item) => item.name === iconId)?.Component ?? fallbackIcon;

  return (
    <div className="flex items-center justify-center overflow-y-auto bg-neutral-200 dark:bg-neutral-800 transition-colors duration-200">
      <Element style={style} />
    </div>
  );
}

export default Canvas;
