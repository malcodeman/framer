import { useState } from "react";
import styled from "styled-components";
import { Lock } from "react-feather";
import {
  Panel,
  PanelBody,
  Control,
  ControlLabel,
} from "../styles/propertiesStyles";
import Input from "./Input";

const LockGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const LockWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding: 0 5px;
  color: ${(props) =>
    props.$active ? props.theme.brand : props.theme.primary};
`;

const BorderTop = styled.div`
  height: 5px;
  width: 5px;
  margin: 0 10px;
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top: ${(props) => `1px solid ${props.theme.secondary};`};
  border-left: ${(props) => `1px solid ${props.theme.secondary};`};
`;

const BorderBottom = styled.div`
  height: 5px;
  width: 5px;
  margin: 0 10px;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  border-left: ${(props) => `1px solid ${props.theme.secondary};`};
  border-bottom: ${(props) => `1px solid ${props.theme.secondary};`};
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

  return (
    <Panel>
      <PanelBody>
        <Control $marginBottom="0">
          <LabelWrapper>
            <ControlLabel>Width</ControlLabel>
            <BorderTop />
          </LabelWrapper>
          <Input value={width} handleSetValue={handleSetWidth} operators />
        </Control>
        <LockGrid>
          <LockWrapper
            $active={constrainProportions}
            onClick={() => setConstrainProportions((v) => !v)}
          >
            <Lock size={10} />
          </LockWrapper>
        </LockGrid>
        <Control>
          <LabelWrapper>
            <ControlLabel>Height</ControlLabel>
            <BorderBottom />
          </LabelWrapper>
          <Input value={height} handleSetValue={handleSetHeight} operators />
        </Control>
        <Control>
          <ControlLabel>Opacity</ControlLabel>
          <Input value={opacity} handleSetValue={handleSetOpacity} />
        </Control>
        <Control>
          <ControlLabel>Rotation</ControlLabel>
          <Input
            value={rotation}
            handleSetValue={handleSetRotation}
            operators
          />
        </Control>
      </PanelBody>
    </Panel>
  );
}

export default Dimensions;
