import { useApp } from "../../../context/AppContext";
import { createIconStyle, getIconComponent } from "../../../core/iconPreview";

interface CanvasProps {
  className?: string;
}

function Canvas({ className = "" }: CanvasProps) {
  const { iconId, color, width, height, opacity, rotation, blur } = useApp();

  const Element = getIconComponent(iconId);
  const style = createIconStyle(
    { iconId, color, width, height, opacity, rotation, blur },
    { transition: "all 0.2s ease" },
  );

  return (
    <div
      className={`flex items-center justify-center overflow-y-auto bg-neutral-200 dark:bg-neutral-800 transition-colors duration-200 ${className}`.trim()}
    >
      <Element style={style} />
    </div>
  );
}

export default Canvas;
