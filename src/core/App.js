import React from "react";
import { useSelector } from "react-redux";
import { Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Global from "./styles/global";
import history from "./routing/history";
import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";
import Toolbar from "../features/toolbar/components/Toolbar";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";
import Store from "../features/store/components/Store";

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

function App() {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Route
          exact
          path="/"
          render={() => (
            <CanvasGrid>
              <Toolbar />
              <Canvas />
              <Properties />
            </CanvasGrid>
          )}
        />
        <Route
          path="/store"
          render={() => (
            <StoreGrid>
              <Toolbar />
              <Store />
              <Canvas />
              <Properties />
            </StoreGrid>
          )}
        />
      </Router>
      <Global />
    </ThemeProvider>
  );
}

export default App;
