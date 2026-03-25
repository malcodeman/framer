import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "styled-components";
import { AppProvider, useApp } from "../context/AppContext";
import Global from "../core/styles/global";
import lightTheme from "../core/styles/themes/light";
import darkTheme from "../core/styles/themes/dark";

function ThemedApp() {
  const { darkMode } = useApp();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global />
      <Outlet />
    </ThemeProvider>
  );
}

export const Route = createRootRoute({
  component: function Root() {
    return (
      <AppProvider>
        <ThemedApp />
      </AppProvider>
    );
  },
});
