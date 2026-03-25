import styled from "styled-components";

export const Panel = styled.div`
  border-bottom: ${(props) =>
    `${props.theme.borderWidth} solid ${props.theme.borderColor};`};
`;

export const PanelBody = styled.div`
  padding: 0 0 10px 0;
  :not(:first-child) {
    padding: 10px 0;
    border-top: ${(props) =>
      `${props.theme.borderWidth} solid ${props.theme.borderColor};`};
  }
`;

export const Control = styled.div<{ $marginBottom?: string }>`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 0 10px;
  :not(:last-child) {
    margin-bottom: ${(props) => props.$marginBottom ?? "10px"};
  }
`;

export const ControlLabel = styled.label`
  font-size: 0.8rem;
  color: ${(props) => props.theme.primary};
`;
