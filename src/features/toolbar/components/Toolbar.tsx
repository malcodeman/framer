import styled from "styled-components";
import { Link } from "@tanstack/react-router";
import { Plus, ShoppingBag } from "react-feather";
import Theme from "./Theme";

const StyledToolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  transition: ${(props) => props.theme.backgroundColorTransition};
  border-bottom: ${(props) =>
    `${props.theme.borderWidth} solid ${props.theme.borderColor};`};
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: initial;
    border-bottom: initial;
    border-right: ${(props) =>
      `${props.theme.borderWidth} solid ${props.theme.borderColor};`};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-right: 24px;
  color: ${(props) => props.theme.primary};
  &.active {
    color: ${(props) => props.theme.brand};
  }
  @media (min-width: 768px) {
    margin-right: initial;
    margin-bottom: 24px;
  }
`;

function Toolbar() {
  return (
    <StyledToolbar>
      <StyledLink
        to="/"
        activeProps={{ className: "active" }}
        activeOptions={{ exact: true }}
      >
        <Plus size={16} />
      </StyledLink>
      <StyledLink to="/store" activeProps={{ className: "active" }}>
        <ShoppingBag size={16} />
      </StyledLink>
      <Theme />
    </StyledToolbar>
  );
}

export default Toolbar;
