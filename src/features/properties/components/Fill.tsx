import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import PanelTitle from "./PanelTitle";
import Input from "./Input";

interface FillProps {
  color: string;
  setColor: (color: string) => void;
}

function Fill({ color, setColor }: FillProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border-b border-neutral-200 dark:border-black">
      <PanelTitle title="Fill" expanded={expanded} setExpanded={setExpanded} />
      {expanded && (
        <div className="px-2.5 pb-2.5">
          <HexColorPicker
            color={color}
            onChange={setColor}
            className="mb-2.5 w-full!"
          />
          <Input
            value={color}
            handleSetValue={(val) => setColor(String(val))}
          />
        </div>
      )}
    </div>
  );
}

export default Fill;
