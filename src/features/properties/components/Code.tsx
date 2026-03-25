import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import * as FeatherIcons from "react-feather";

const CodeMode = styled.div`
  padding: 0 10px;
`;

const PreformattedText = styled.pre`
  white-space: pre-wrap;
  margin: 0;
`;

const StyledCode = styled.code`
  font-family: "Roboto Mono", monospace;
  font-size: 0.6rem;
  color: ${(props) => props.theme.primary};
`;

type FeatherIcon = React.FC<{ style?: React.CSSProperties }> & {
  displayName?: string;
};

interface CodeProps {
  iconId: string;
  color: string;
  width: number;
  height: number;
  opacity: number;
  rotation: number;
  blur: number;
}

function Code({
  iconId,
  color,
  width,
  height,
  opacity,
  rotation,
  blur,
}: CodeProps) {
  const style: React.CSSProperties = {
    color,
    width,
    height,
    opacity,
    transform: `rotate(${rotation}deg)`,
    filter: `blur(${blur}px)`,
  };

  const icons = Object.values(FeatherIcons) as FeatherIcon[];
  const Element =
    icons.find((item) => item.displayName === iconId) ?? FeatherIcons.GitHub;

  return (
    <CodeMode>
      <PreformattedText>
        <StyledCode>
          {ReactDOMServer.renderToStaticMarkup(<Element style={style} />)}
        </StyledCode>
      </PreformattedText>
    </CodeMode>
  );
}

export default Code;
