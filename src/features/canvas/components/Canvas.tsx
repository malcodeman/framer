import { useApp } from "../../../context/AppContext";
import { getIconComponent } from "../../../core/iconPreview";

interface CanvasProps {
  className?: string;
}

function Canvas({ className = "" }: CanvasProps) {
  const { iconId } = useApp();

  const Element = getIconComponent(iconId);

  return (
    <div
      className={`flex items-center justify-center overflow-y-auto bg-neutral-200 dark:bg-neutral-800 transition-colors duration-200 ${className}`.trim()}
    >
      <Element
        size={160}
        className="text-neutral-900 transition-colors duration-200 dark:text-white"
      />
    </div>
  );
}

export default Canvas;
