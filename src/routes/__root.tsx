import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Global from "../core/styles/global";
import lightTheme from "../core/styles/themes/light";
import darkTheme from "../core/styles/themes/dark";

export const Route = createRootRoute({
  component: function Root() {
    const darkMode = useSelector((state: any) => state.settings.darkMode);
    const theme = darkMode ? darkTheme : lightTheme;
    return (
      <ThemeProvider theme={theme}>
        <Global />
        <Outlet />
      </ThemeProvider>
    );
  },
});
