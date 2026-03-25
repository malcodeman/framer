import { useState } from "react";
import {
  Panel,
  PanelBody,
  Control,
  ControlLabel,
} from "../styles/propertiesStyles";
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
    <Panel>
      <PanelTitle title="Blur" expanded={expanded} setExpanded={setExpanded} />
      {expanded && (
        <PanelBody>
          <Control>
            <ControlLabel>Amount</ControlLabel>
            <Input value={blur} handleSetValue={handleOnChange} operators />
          </Control>
        </PanelBody>
      )}
    </Panel>
  );
}

export default Blur;
