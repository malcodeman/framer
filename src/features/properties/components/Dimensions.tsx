import { useState } from "react";
import { FiLock as Lock } from "react-icons/fi";
import Input from "./Input";

interface DimensionsProps {
  width: number;
  height: number;
  opacity: number;
  rotation: number;
  setWidth: (w: number) => void;
  setHeight: (h: number) => void;
  setOpacity: (o: number) => void;
  setRotation: (r: number) => void;
}

function Dimensions({
  width,
  height,
  opacity,
  rotation,
  setWidth,
  setHeight,
  setOpacity,
  setRotation,
}: DimensionsProps) {
  const [constrainProportions, setConstrainProportions] = useState(true);

  function handleSetWidth(value: string | number) {
    const number = Number(value);
    if (!number || isNaN(number) || number.toString().length > 4) return;
    setWidth(number);
    if (constrainProportions) setHeight((number * height) / width);
  }

  function handleSetHeight(value: string | number) {
    const number = Number(value);
    if (!number || isNaN(number) || number.toString().length > 4) return;
    setHeight(number);
    if (constrainProportions) setWidth((number * width) / height);
  }

  function handleSetOpacity(value: string | number) {
    const number = Number(value);
    if (isNaN(number)) return;
    setOpacity(number);
  }

  function handleSetRotation(value: string | number) {
    const number = Number(value);
    if (isNaN(number) || number > 360) return;
    setRotation(number);
  }

  const row = "grid grid-cols-[1fr_2fr] items-center px-2.5";
  const label = "text-xs text-neutral-500 dark:text-neutral-400";

  return (
    <div className="border-b border-neutral-200 dark:border-black pb-2.5">
      <div className={row}>
        <label className={label}>Width</label>
        <Input value={width} handleSetValue={handleSetWidth} operators />
      </div>
      <div className="grid grid-cols-[1fr_2fr] my-0.5">
        <div
          className={`flex justify-end px-1.5 cursor-pointer ${constrainProportions ? "text-blue-600" : "text-neutral-500"}`}
          onClick={() => setConstrainProportions((v) => !v)}
        >
          <Lock size={10} />
        </div>
      </div>
      <div className={row}>
        <label className={label}>Height</label>
        <Input value={height} handleSetValue={handleSetHeight} operators />
      </div>
      <div className={`${row} mt-2.5`}>
        <label className={label}>Opacity</label>
        <Input value={opacity} handleSetValue={handleSetOpacity} />
      </div>
      <div className={`${row} mt-2.5`}>
        <label className={label}>Rotation</label>
        <Input value={rotation} handleSetValue={handleSetRotation} operators />
      </div>
    </div>
  );
}

export default Dimensions;
