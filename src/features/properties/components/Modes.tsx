import styled from "styled-components";

const StyledModes = styled.header`
  display: flex;
  align-items: center;
`;

const Text = styled.span<{ $active: boolean }>`
  font-size: 0.8rem;
  padding: 10px;
  line-height: 40px;
  cursor: default;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
  color: ${(props) =>
    props.$active ? props.theme.primary : props.theme.secondary};
`;

interface ModesProps {
  showCode: boolean;
  setShowCode: (value: boolean) => void;
}

function Modes({ showCode, setShowCode }: ModesProps) {
  return (
    <StyledModes>
      <Text $active={!showCode} onClick={() => setShowCode(false)}>
        Design
      </Text>
      <Text $active={showCode} onClick={() => setShowCode(true)}>
        Code
      </Text>
    </StyledModes>
  );
}

export default Modes;
