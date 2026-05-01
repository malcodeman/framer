import { useState } from "react";
import { useApp } from "../../../context/AppContext";
import Modes from "./Modes";
import Dimensions from "./Dimensions";
import Fill from "./Fill";
import Blur from "./Blur";
import Code from "./Code";

interface PropertiesProps {
  showModes?: boolean;
  borderClassName?: string;
}

function Properties({
  showModes = true,
  borderClassName = "border-l border-neutral-200 dark:border-black",
}: PropertiesProps) {
  const [showCode, setShowCode] = useState(false);
  const {
    setColor,
    setWidth,
    setHeight,
    setOpacity,
    setRotation,
    setBlur,
    color,
    width,
    height,
    opacity,
    rotation,
    blur,
  } = useApp();

  const shouldShowCode = showModes && showCode;

  return (
    <div
      className={`flex flex-col overflow-y-auto bg-neutral-50 dark:bg-neutral-900 ${borderClassName} transition-colors duration-200`}
    >
      {showModes && <Modes showCode={showCode} setShowCode={setShowCode} />}
      {shouldShowCode ? (
        <Code />
      ) : (
        <>
          <Dimensions
            width={width}
            height={height}
            opacity={opacity}
            rotation={rotation}
            setWidth={setWidth}
            setHeight={setHeight}
            setOpacity={setOpacity}
            setRotation={setRotation}
          />
          <Fill color={color} setColor={setColor} />
          <Blur blur={blur} setBlur={setBlur} />
        </>
      )}
    </div>
  );
}

export default Properties;
