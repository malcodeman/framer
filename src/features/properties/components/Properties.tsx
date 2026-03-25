import { useState } from "react";
import styled from "styled-components";
import { useApp } from "../../../context/AppContext";
import Modes from "./Modes";
import Dimensions from "./Dimensions";
import Fill from "./Fill";
import Blur from "./Blur";
import Code from "./Code";

const PropertiesPanel = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${(props) => props.theme.backgroundPrimary};
  transition: ${(props) => props.theme.backgroundColorTransition};
  border-left: ${(props) =>
    `${props.theme.borderWidth} solid ${props.theme.borderColor};`};
`;

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
    <PropertiesPanel>
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
    </PropertiesPanel>
  );
}

export default Properties;
