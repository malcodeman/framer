import styled from "styled-components";
import * as FeatherIcons from "react-feather";
import { useApp } from "../../../context/AppContext";

const Wrapper = styled.div`
  overflow-y: auto;
  transition: ${(props) => props.theme.backgroundColorTransition};
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
  grid-gap: 10px;
  padding: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.backgroundSecondary};
  border: ${(props) =>
    `${props.theme.borderWidth} solid ${props.theme.borderColor};`};
`;

const IconName = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  text-align: center;
  overflow-wrap: anywhere;
  color: ${(props) => props.theme.primary};
`;

function Store() {
  const { setIconId } = useApp();

  return (
    <Wrapper>
      <Grid>
        {Object.values(FeatherIcons).map((Icon) => (
          <IconWrapper
            key={Icon.displayName}
            onClick={() => setIconId(Icon.displayName ?? "")}
          >
            <Icon />
            <IconName>{Icon.displayName}</IconName>
          </IconWrapper>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Store;
