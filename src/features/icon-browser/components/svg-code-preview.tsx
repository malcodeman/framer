import { useIconSelection } from "../context/icon-selection-context";
import { renderIconSvg } from "../lib/render-icon-svg";

function SvgCodePreview() {
  const { selectedIconName } = useIconSelection();

  return (
    <div className="h-full overflow-y-auto bg-white p-2.5 dark:bg-neutral-950">
      <pre className="m-0 whitespace-pre-wrap break-all">
        <code className="font-mono text-[0.65rem] text-neutral-700 dark:text-white">
          {renderIconSvg(selectedIconName)}
        </code>
      </pre>
    </div>
  );
}

export default SvgCodePreview;
