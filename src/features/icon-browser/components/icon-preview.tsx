import { useIconSelection } from "../context/icon-selection-context";
import { getIconComponent } from "../lib/render-icon-svg";

interface IconPreviewProps {
  className?: string;
}

function IconPreview({ className = "" }: IconPreviewProps) {
  const { selectedIconName } = useIconSelection();
  const Icon = getIconComponent(selectedIconName);

  return (
    <div
      className={`flex items-center justify-center overflow-y-auto bg-neutral-200 transition-colors duration-200 dark:bg-neutral-800 ${className}`.trim()}
    >
      <Icon
        size={160}
        className="text-neutral-900 transition-colors duration-200 dark:text-white"
      />
    </div>
  );
}

export default IconPreview;
