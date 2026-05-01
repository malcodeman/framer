import { useApp } from "../../../context/AppContext";
import { renderIconSvg } from "../../../core/iconPreview";

function Code() {
  const { iconId, color, width, height, opacity, rotation, blur } = useApp();

  return (
    <div className="p-2.5">
      <pre className="m-0 whitespace-pre-wrap break-all">
        <code className="font-mono text-[0.65rem] text-neutral-700 dark:text-white">
          {renderIconSvg({
            iconId,
            color,
            width,
            height,
            opacity,
            rotation,
            blur,
          })}
        </code>
      </pre>
    </div>
  );
}

export default Code;
