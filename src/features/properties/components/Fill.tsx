import { useState } from "react";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { Panel, PanelBody } from "../styles/propertiesStyles";
import PanelTitle from "./PanelTitle";
import Input from "./Input";

const StyledHexColorPicker = styled(HexColorPicker)`
  margin-bottom: 10px;
`;

const Control = styled.div`
  padding: 0 10px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

interface FillProps {
  color: string;
  setColor: (color: string) => void;
}

function Fill({ color, setColor }: FillProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <Panel>
      <PanelTitle title="Fill" expanded={expanded} setExpanded={setExpanded} />
      {expanded && (
        <PanelBody>
          <Control>
            <StyledHexColorPicker color={color} onChange={setColor} />
            <Input
              value={color}
              handleSetValue={(val) => setColor(String(val))}
            />
          </Control>
        </PanelBody>
      )}
    </Panel>
  );
}

export default Fill;
