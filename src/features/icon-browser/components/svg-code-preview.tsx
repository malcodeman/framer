import { useMemo } from "react";
import formatXml from "xml-formatter";
import { useIconSelection } from "../context/icon-selection-context";
import { renderIconSvg } from "../lib/render-icon-svg";

function SvgCodePreview() {
  const { selectedIconName } = useIconSelection();
  const svgCode = useMemo(
    () =>
      formatXml(renderIconSvg(selectedIconName), {
        indentation: "  ",
        lineSeparator: "\n",
      }),
    [selectedIconName],
  );

  return (
    <div className="h-full overflow-y-auto bg-white p-2.5 dark:bg-neutral-950">
      <pre className="m-0 whitespace-pre-wrap wrap-break-word">
        <code className="font-mono text-[0.65rem] text-neutral-700 dark:text-white">
          {svgCode}
        </code>
      </pre>
    </div>
  );
}

export default SvgCodePreview;
