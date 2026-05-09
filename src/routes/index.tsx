import { createFileRoute } from "@tanstack/react-router";
import IconBrowserLayout from "../features/icon-browser/components/icon-browser-layout";

export const Route = createFileRoute("/")({
  component: function IndexRoute() {
    return <IconBrowserLayout />;
  },
});
