import { useState } from "react";
import PanelTitle from "./PanelTitle";
import Input from "./Input";

interface BlurProps {
  blur: number;
  setBlur: (value: number) => void;
}

function Blur({ blur, setBlur }: BlurProps) {
  const [expanded, setExpanded] = useState(true);

  function handleOnChange(value: string | number) {
    const number = Number(value);
    if (number < 0 || isNaN(number) || number.toString().length > 4) return;
    setBlur(number);
  }

  return (
    <div className="border-b border-neutral-200 dark:border-black">
      <PanelTitle title="Blur" expanded={expanded} setExpanded={setExpanded} />
      {expanded && (
        <div className="pb-2.5">
          <div className="grid grid-cols-[1fr_2fr] items-center px-2.5">
            <label className="text-xs text-neutral-500 dark:text-neutral-400">
              Amount
            </label>
            <Input value={blur} handleSetValue={handleOnChange} operators />
          </div>
        </div>
      )}
    </div>
  );
}

export default Blur;
