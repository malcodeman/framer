import styled from "styled-components";
import * as FeatherIcons from "react-feather";
import { useApp } from "../../../context/AppContext";

const StyledCanvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: ${(props) => props.theme.backgroundCanvas};
  transition: ${(props) => props.theme.backgroundColorTransition};
`;

type FeatherIcon = React.FC<{ style?: React.CSSProperties }> & {
  displayName?: string;
};

function Canvas() {
  const { iconId, color, width, height, opacity, rotation, blur } = useApp();

  const style: React.CSSProperties = {
    color,
    width,
    height,
    opacity,
    transform: `rotate(${rotation}deg)`,
    filter: `blur(${blur}px)`,
    transition: "all 0.2s ease",
  };

  const icons = Object.values(FeatherIcons) as FeatherIcon[];
  const Element =
    icons.find((item) => item.displayName === iconId) ?? FeatherIcons.GitHub;

  return (
    <StyledCanvas>
      <Element style={style} />
    </StyledCanvas>
  );
}

export default Canvas;
