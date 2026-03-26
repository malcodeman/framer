import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AppProvider } from "../context/AppContext";

export const Route = createRootRoute({
  component: function Root() {
    return (
      <AppProvider>
        <Outlet />
      </AppProvider>
    );
  },
});
