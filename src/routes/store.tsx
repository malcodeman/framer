import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import Toolbar from "../features/toolbar/components/Toolbar";
import Store from "../features/store/components/Store";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";

const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px auto 40vh auto;
  height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 40px 1fr 2fr 222px;
    grid-template-rows: initial;
  }
`;

export const Route = createFileRoute("/store")({
  component: function StoreRoute() {
    return (
      <StoreGrid>
        <Toolbar />
        <Store />
        <Canvas />
        <Properties />
      </StoreGrid>
    );
  },
});
