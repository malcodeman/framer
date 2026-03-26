import { useState } from "react";
import { useApp } from "../../../context/AppContext";
import Modes from "./Modes";
import Dimensions from "./Dimensions";
import Fill from "./Fill";
import Blur from "./Blur";
import Code from "./Code";

function Properties() {
  const [showCode, setShowCode] = useState(false);
  const {
    iconId,
    color,
    width,
    height,
    opacity,
    rotation,
    blur,
    setColor,
    setWidth,
    setHeight,
    setOpacity,
    setRotation,
    setBlur,
  } = useApp();

  return (
    <div className="flex flex-col overflow-y-auto bg-neutral-50 dark:bg-neutral-900 border-l border-neutral-200 dark:border-black transition-colors duration-200">
      <Modes showCode={showCode} setShowCode={setShowCode} />
      {showCode ? (
        <Code
          iconId={iconId}
          color={color}
          width={width}
          height={height}
          opacity={opacity}
          rotation={rotation}
          blur={blur}
        />
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
