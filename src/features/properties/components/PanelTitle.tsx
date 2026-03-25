import styled, { useTheme } from "styled-components";
import { Minus, Plus } from "react-feather";

const StyledPanelTitle = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundInput};
  svg {
    cursor: pointer;
  }
`;

const PanelTitleText = styled.h2`
  font-size: 0.8rem;
  font-weight: normal;
  color: ${(props) => props.theme.primary};
`;

interface PanelTitleProps {
  title: string;
  expanded?: boolean;
  setExpanded: (expanded: boolean) => void;
}

function PanelTitle({ title, expanded = false, setExpanded }: PanelTitleProps) {
  const theme = useTheme();
  return (
    <StyledPanelTitle>
      <PanelTitleText>{title}</PanelTitleText>
      {expanded ? (
        <Minus
          size={12}
          color={theme.primary}
          onClick={() => setExpanded(false)}
        />
      ) : (
        <Plus
          size={12}
          color={theme.primary}
          onClick={() => setExpanded(true)}
        />
      )}
    </StyledPanelTitle>
  );
}

export default PanelTitle;
