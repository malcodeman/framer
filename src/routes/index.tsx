import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import Toolbar from "../features/toolbar/components/Toolbar";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";

const CanvasGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40vh auto;
  height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 40px 1fr 222px;
    grid-template-rows: initial;
  }
`;

export const Route = createFileRoute("/")({
  component: function IndexRoute() {
    return (
      <CanvasGrid>
        <Toolbar />
        <Canvas />
        <Properties />
      </CanvasGrid>
    );
  },
});
